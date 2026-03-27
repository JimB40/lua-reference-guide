function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
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

function buildVersionUrl(entry, suffix, defaultAlias) {
  const normalizedSuffix = suffix === "/" ? "" : suffix.replace(/^\//, "");
  const prefix = entry.aliases.includes(defaultAlias) ? "/" : `/${entry.version}/`;
  return normalizedSuffix ? `${prefix}${normalizedSuffix}` : prefix;
}

async function mountVersionSwitcher() {
  const config = getVersionConfig();
  const defaultAlias = config?.version?.default || "latest";
  const sidebarInner = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
  const nav = sidebarInner?.querySelector(".md-nav--primary");
  if (!sidebarInner || !nav) return;

  let versions;
  try {
    const response = await fetch("/versions.json", { credentials: "same-origin" });
    if (!response.ok) return;
    versions = await response.json();
  } catch {
    return;
  }

  if (!Array.isArray(versions) || versions.length < 2) return;

  const entries = versions
    .filter((entry) => entry && entry.version && entry.title)
    .map((entry) => ({
      version: entry.version,
      title: entry.title,
      aliases: Array.isArray(entry.aliases) ? entry.aliases : [],
    }));

  if (entries.length < 2) return;

  const { currentVersion, suffix } = inferCurrentVersion(entries, window.location.pathname, defaultAlias);

  const wrapper = document.createElement("div");
  wrapper.className = "sidebar-version-switcher";

  const select = document.createElement("select");
  select.className = "sidebar-version-switcher__select";
  select.setAttribute("aria-label", "Select version");

  for (const entry of entries) {
    const option = document.createElement("option");
    option.value = buildVersionUrl(entry, suffix, defaultAlias);
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
  nav.parentNode?.insertBefore(wrapper, nav);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountVersionSwitcher, { once: true });
} else {
  void mountVersionSwitcher();
}
