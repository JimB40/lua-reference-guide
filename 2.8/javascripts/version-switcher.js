function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function stripPathPrefix(pathname, prefix) {
  const normalizedPath = normalizePath(pathname);
  const normalizedPrefix = normalizePath(prefix);
  if (!normalizedPath.startsWith(normalizedPrefix)) return normalizedPath;

  const stripped = normalizedPath.slice(normalizedPrefix.length);
  return stripped ? `/${stripped}` : "/";
}

function getVersionConfig() {
  const configNode = document.querySelector("#__config");
  if (!configNode) return null;

  try {
    return JSON.parse(configNode.textContent || "{}");
  } catch {
    return null;
  }
}

function getVersionRootUrl(config) {
  const base = config?.base || ".";
  return new URL(`${base.replace(/\/?$/, "/")}`, window.location.href);
}

function candidateManifestRoots(versionRootUrl) {
  const candidates = [];
  let current = new URL(versionRootUrl.href);

  for (let remaining = 0; remaining < 6; remaining += 1) {
    const normalized = normalizePath(current.pathname);
    if (!candidates.some((candidate) => candidate.pathname === normalized)) {
      candidates.push(new URL(normalized, current.origin));
    }

    if (normalized === "/") break;
    current = new URL("..", current);
  }

  return candidates;
}

async function loadVersionsManifest(config) {
  const versionRootUrl = getVersionRootUrl(config);

  for (const rootUrl of candidateManifestRoots(versionRootUrl)) {
    const manifestUrl = new URL("versions.json", rootUrl);

    try {
      const response = await fetch(manifestUrl, { credentials: "same-origin" });
      if (!response.ok) continue;

      const versions = await response.json();
      if (!Array.isArray(versions)) continue;

      return { versions, manifestRootUrl: rootUrl };
    } catch {
      // Try the next parent path.
    }
  }

  return null;
}

function inferCurrentVersion(entries, pathname, defaultAlias) {
  const normalizedPath = normalizePath(pathname);
  const firstSegment = normalizedPath.split("/").filter(Boolean)[0] || "";

  for (const entry of entries) {
    if (firstSegment === entry.version || entry.aliases.includes(firstSegment)) {
      return {
        currentVersion: entry.version,
        suffix: normalizedPath.slice(firstSegment.length + 1) || "/",
      };
    }
  }

  const fallback = entries.find((entry) => entry.aliases.includes(defaultAlias)) || entries[0];
  return {
    currentVersion: fallback?.version || "",
    suffix: normalizedPath,
  };
}

function buildVersionUrl(entry, defaultAlias, manifestRootPath) {
  const prefix =
    entry.aliases.includes(defaultAlias) ? manifestRootPath : `${manifestRootPath}${entry.version}/`;
  return prefix;
}

async function mountVersionSwitcher() {
  const config = getVersionConfig();
  const defaultAlias = config?.version?.default || "latest";
  const headerInner = document.querySelector(".md-header__inner");
  const titleTopic = headerInner?.querySelector(".md-header__title .md-header__topic:first-child");
  if (!headerInner || !titleTopic) return;

  const manifest = await loadVersionsManifest(config);
  if (!manifest) return;

  const { versions, manifestRootUrl } = manifest;
  if (versions.length < 2) return;

  const entries = versions
    .filter((entry) => entry && entry.version && entry.title)
    .map((entry) => ({
      version: entry.version,
      title: entry.title,
      aliases: Array.isArray(entry.aliases) ? entry.aliases : [],
    }));

  if (entries.length < 2) return;

  const manifestRootPath = normalizePath(manifestRootUrl.pathname);
  const relativePath = stripPathPrefix(window.location.pathname, manifestRootPath);
  const { currentVersion } = inferCurrentVersion(entries, relativePath, defaultAlias);

  const wrapper = document.createElement("div");
  wrapper.className = "header-version-switcher";

  const select = document.createElement("select");
  select.className = "header-version-switcher__select";
  select.setAttribute("aria-label", "Select version");

  for (const entry of entries) {
    const option = document.createElement("option");
    option.value = buildVersionUrl(entry, defaultAlias, manifestRootPath);
    option.textContent = entry.title;
    option.selected = entry.version === currentVersion;
    select.appendChild(option);
  }

  select.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    window.location.href = target.value;
  });

  wrapper.appendChild(select);
  titleTopic.appendChild(wrapper);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountVersionSwitcher, { once: true });
} else {
  void mountVersionSwitcher();
}
