(function () {
  const mobileMedia = window.matchMedia("(max-width: 76.234375em)");
  const rootClass = "mobile-desktop-nav-active";

  function directChild(element, selector) {
    const children = Array.from(element.children);
    return children.find((child) => child.matches(selector)) || null;
  }

  function directChildren(element, selector) {
    return Array.from(element.children).filter((child) => child.matches(selector));
  }

  function textOf(element) {
    return (element?.textContent || "").trim();
  }

  // With the navigation.indexes theme feature enabled, a section that has
  // its own index page gets its toggle <label> wrapped (alongside a real
  // <a> link) inside a ".md-nav__container" div instead of being a direct
  // child of the <li> -- and Material no longer renders a redundant first
  // list entry duplicating the section name for those sections at all, so
  // there's nothing left to hide. Sections without their own index page
  // keep the plain unwrapped <label> structure.
  function sectionLabel(item) {
    return (
      directChild(item, "label.md-nav__link") ||
      item.querySelector(":scope > .md-nav__container > label.md-nav__link")
    );
  }

  function buildLeafItem(sourceItem) {
    const link = directChild(sourceItem, "a.md-nav__link[href]");
    if (!link) {
      return null;
    }

    const item = document.createElement("li");
    item.className = "mobile-desktop-nav__item";

    if (sourceItem.classList.contains("md-nav__item--active")) {
      item.classList.add("mobile-desktop-nav__item--active");
    }

    const anchor = document.createElement("a");
    anchor.className = "mobile-desktop-nav__link";
    anchor.href = link.href;
    anchor.textContent = textOf(link.querySelector(".md-ellipsis")) || textOf(link);

    if (link.classList.contains("md-nav__link--active")) {
      anchor.classList.add("mobile-desktop-nav__link--active");
    }

    item.appendChild(anchor);
    return item;
  }

  function buildNestedItem(sourceItem) {
    const toggle = directChild(sourceItem, "input.md-nav__toggle");
    const label = sectionLabel(sourceItem);
    const nestedNav = directChild(sourceItem, "nav.md-nav:not(.md-nav--secondary)");
    if (!label || !nestedNav) {
      return null;
    }

    const nestedListSource = directChild(nestedNav, "ul.md-nav__list");
    if (!nestedListSource) {
      return null;
    }

    const item = document.createElement("li");
    item.className = "mobile-desktop-nav__item mobile-desktop-nav__item--nested";

    if (sourceItem.classList.contains("md-nav__item--migration")) {
      item.classList.add("mobile-desktop-nav__item--migration");
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "mobile-desktop-nav__toggle";
    button.innerHTML =
      '<span class="mobile-desktop-nav__label"></span><span class="mobile-desktop-nav__icon" aria-hidden="true"></span>';
    button.querySelector(".mobile-desktop-nav__label").textContent =
      textOf(label.querySelector(".md-ellipsis")) || textOf(label);

    const nestedList = buildList(nestedListSource);
    nestedList.classList.add("mobile-desktop-nav__list--nested");

    const expanded =
      Boolean(toggle?.checked) ||
      sourceItem.classList.contains("md-nav__item--active") ||
      sourceItem.classList.contains("md-nav__item--section-active") ||
      Boolean(sourceItem.querySelector(".md-nav__link--active"));

    if (expanded) {
      item.classList.add("mobile-desktop-nav__item--expanded");
      button.setAttribute("aria-expanded", "true");
    } else {
      nestedList.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }

    button.addEventListener("click", () => {
      const nowExpanded = item.classList.toggle("mobile-desktop-nav__item--expanded");
      nestedList.hidden = !nowExpanded;
      button.setAttribute("aria-expanded", nowExpanded ? "true" : "false");
    });

    item.appendChild(button);
    item.appendChild(nestedList);
    return item;
  }

  function buildList(sourceList) {
    const list = document.createElement("ul");
    list.className = "mobile-desktop-nav__list";

    const sourceItems = directChildren(sourceList, "li.md-nav__item").filter(
      (item) => !item.hidden,
    );
    sourceItems.forEach((sourceItem) => {
      const hasSecondaryToc = Boolean(directChild(sourceItem, "nav.md-nav--secondary"));
      let item = null;

      if (hasSecondaryToc) {
        item = buildLeafItem(sourceItem);
      } else if (sourceItem.classList.contains("md-nav__item--nested")) {
        item = buildNestedItem(sourceItem);
      } else {
        item = buildLeafItem(sourceItem);
      }

      if (item) {
        list.appendChild(item);
      }
    });

    return list;
  }

  function buildDesktopLikeNav(sourceNav) {
    const wrapper = document.createElement("div");
    wrapper.className = "mobile-desktop-nav-shell";

    const nav = document.createElement("nav");
    nav.className = "mobile-desktop-nav";
    nav.setAttribute("aria-label", "Navigation");

    const sourceList = directChild(sourceNav, "ul.md-nav__list");
    if (!sourceList) {
      return wrapper;
    }

    nav.appendChild(buildList(sourceList));
    wrapper.appendChild(nav);
    return wrapper;
  }

  function applyMobileDesktopNav() {
    const primarySidebar = document.querySelector(".md-sidebar--primary");
    const sidebarInner = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
    const scrollwrap = document.querySelector(".md-sidebar--primary .md-sidebar__scrollwrap");
    const sourceNav = document.querySelector(".md-sidebar--primary .md-nav--primary");
    if (!primarySidebar || !sidebarInner || !sourceNav) {
      return;
    }

    const existing = sidebarInner.querySelector(".mobile-desktop-nav-shell");
    if (existing) {
      existing.remove();
    }

    if (!mobileMedia.matches) {
      document.documentElement.classList.remove(rootClass);
      sourceNav.hidden = false;
      return;
    }

    document.documentElement.classList.add(rootClass);
    const customNav = buildDesktopLikeNav(sourceNav);
    const drawerWidth = Math.round(
      (scrollwrap || sidebarInner || primarySidebar).getBoundingClientRect().width,
    );
    if (drawerWidth > 0) {
      primarySidebar.style.width = `${drawerWidth}px`;
      sidebarInner.style.width = `${drawerWidth}px`;
      sidebarInner.style.minWidth = `${drawerWidth}px`;
      if (scrollwrap) {
        scrollwrap.style.width = `${drawerWidth}px`;
        scrollwrap.style.minWidth = `${drawerWidth}px`;
      }
      customNav.style.width = `${drawerWidth}px`;
      customNav.style.minWidth = `${drawerWidth}px`;
      const customInnerNav = customNav.querySelector(".mobile-desktop-nav");
      if (customInnerNav) {
        customInnerNav.style.width = `${drawerWidth}px`;
        customInnerNav.style.minWidth = `${drawerWidth}px`;
      }
    }
    sourceNav.hidden = true;
    sidebarInner.appendChild(customNav);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyMobileDesktopNav);
  } else {
    applyMobileDesktopNav();
  }

  window.addEventListener("load", applyMobileDesktopNav);

  if (typeof mobileMedia.addEventListener === "function") {
    mobileMedia.addEventListener("change", applyMobileDesktopNav);
  } else if (typeof mobileMedia.addListener === "function") {
    mobileMedia.addListener(applyMobileDesktopNav);
  }
})();
