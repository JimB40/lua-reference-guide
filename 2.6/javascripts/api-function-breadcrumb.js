(function () {
  function getNavLabelText(element) {
    return element?.querySelector(".md-ellipsis")?.textContent?.trim() || "";
  }

  // Item pages serve at .../api-reference/<group-slug>/<item-slug>/ -- the
  // group is already encoded in the URL, so there's no need to hand-maintain
  // a slug-to-section lookup table (the previous approach, which silently
  // went stale and broke every match the moment the URL scheme changed).
  function groupSlugForPath(pathname) {
    const nested = pathname.match(/\/api-reference\/([^/]+)\/[^/]+\/?$/);
    if (nested) return nested[1];
    // A handful of LVGL pages are still flat (.../api-reference/lvgl-<name>/)
    // rather than nested under a group folder, since they're hand-preserved
    // content with no upstream annotation to extract from yet (see
    // HANDOFF.md). Treat those as belonging to the Display LVGL group.
    const flat = pathname.match(/\/api-reference\/(lvgl-[^/]+)\/?$/);
    return flat ? "display-lvgl" : null;
  }

  function groupSlugForHref(href) {
    const path = new URL(href, window.location.href).pathname;
    const match = path.match(/\/api-reference\/([^/]+)\/?$/);
    return match ? match[1] : null;
  }

  function forceNestedNavOpen(item) {
    if (!item) return;

    item.classList.add("md-nav__item--active");

    const label = item.querySelector(":scope > label.md-nav__link");
    const toggle = item.querySelector(":scope > input.md-nav__toggle");
    const nav = item.querySelector(":scope > nav.md-nav");

    if (label) {
      label.classList.add("md-nav__link--active");
    }

    if (toggle) {
      toggle.checked = true;
    }

    if (nav) {
      nav.setAttribute("aria-expanded", "true");
    }
  }

  function clearApiFunctionBreadcrumb() {
    document.querySelector(".api-function-breadcrumb")?.remove();
  }

  function buildBreadcrumbLink(href, text) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    return link;
  }

  function appendBreadcrumbSeparator(container) {
    const separator = document.createElement("span");
    separator.className = "api-function-breadcrumb__separator";
    separator.textContent = "›";
    container.appendChild(separator);
  }

  function renderApiFunctionBreadcrumb(sectionLink) {
    const article = document.querySelector(".md-content__inner.md-typeset");
    if (!article) return;

    clearApiFunctionBreadcrumb();

    const breadcrumb = document.createElement("nav");
    breadcrumb.className = "api-function-breadcrumb";
    breadcrumb.setAttribute("aria-label", "Breadcrumb");

    // Most item pages are nested under a group folder
    // (.../api-reference/<group>/<item>/); a handful of legacy LVGL pages
    // are still flat (.../api-reference/<item>/, see groupSlugForPath).
    // Compute how many levels to climb from the actual current URL depth
    // rather than assuming one fixed depth for both.
    const depth = window.location.pathname.split("/").filter(Boolean).length;
    const upToRoot = "../".repeat(depth) || "./";
    const upToApiReference = "../".repeat(Math.max(depth - 1, 0)) || "./";
    const siteRootHref = new URL(upToRoot, window.location.href).pathname;
    const apiReferenceHref = new URL(upToApiReference, window.location.href).pathname;
    const sectionHref = new URL(
      sectionLink.getAttribute("href") || sectionLink.href,
      window.location.href,
    ).pathname;

    breadcrumb.appendChild(buildBreadcrumbLink(siteRootHref, "EdgeTX LuaDoc"));
    appendBreadcrumbSeparator(breadcrumb);
    breadcrumb.appendChild(buildBreadcrumbLink(apiReferenceHref, "API Reference"));
    appendBreadcrumbSeparator(breadcrumb);
    breadcrumb.appendChild(buildBreadcrumbLink(sectionHref, getNavLabelText(sectionLink)));

    article.insertBefore(breadcrumb, article.firstChild);
  }

  function setupApiFunctionBreadcrumb() {
    const primaryNav = document.querySelector(".md-sidebar--primary .md-nav--primary");
    const activeGroupSlug = groupSlugForPath(window.location.pathname);
    if (!primaryNav || !activeGroupSlug) {
      clearApiFunctionBreadcrumb();
      return;
    }

    const apiReferenceItem = Array.from(
      primaryNav.querySelectorAll(":scope > .md-nav__list > .md-nav__item--nested"),
    ).find(
      (item) =>
        getNavLabelText(item.querySelector(":scope > label.md-nav__link")) === "API Reference",
    );
    if (!apiReferenceItem) {
      clearApiFunctionBreadcrumb();
      return;
    }

    forceNestedNavOpen(apiReferenceItem);

    const sectionLinks = apiReferenceItem.querySelectorAll(
      ":scope > nav.md-nav > .md-nav__list > .md-nav__item > a.md-nav__link",
    );
    const matchingSectionLink = Array.from(sectionLinks).find(
      (link) => groupSlugForHref(link.getAttribute("href") || link.href) === activeGroupSlug,
    );
    if (!matchingSectionLink) {
      clearApiFunctionBreadcrumb();
      return;
    }

    const sectionItem = matchingSectionLink.closest(".md-nav__item");
    if (sectionItem) {
      sectionItem.classList.add("md-nav__item--active");
    }
    matchingSectionLink.classList.add("md-nav__link--active");

    renderApiFunctionBreadcrumb(matchingSectionLink);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(setupApiFunctionBreadcrumb);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupApiFunctionBreadcrumb, { once: true });
  } else {
    setupApiFunctionBreadcrumb();
  }
})();
