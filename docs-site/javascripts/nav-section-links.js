function getNavLabelText(element) {
  return element?.querySelector(".md-ellipsis")?.textContent?.trim() || "";
}

function mountNavSectionLinks() {
  const primaryNav = document.querySelector(".md-sidebar--primary .md-nav--primary");
  if (!primaryNav) return;

  const nestedItems = primaryNav.querySelectorAll(":scope .md-nav__item--nested");

  for (const item of nestedItems) {
    const label = item.querySelector(":scope > label.md-nav__link");
    const toggle = item.querySelector(":scope > input.md-nav__toggle");
    const childNav = item.querySelector(":scope > nav.md-nav");
    const firstChildItem = childNav?.querySelector(":scope > .md-nav__list > .md-nav__item");
    const firstChildLink = firstChildItem?.querySelector(":scope > a.md-nav__link");

    if (!label || !toggle || !firstChildItem || !firstChildLink) continue;

    const parentText = getNavLabelText(label);
    const firstChildText = getNavLabelText(firstChildLink);

    if (!parentText || parentText !== firstChildText) continue;

    item.classList.add("md-nav__item--section-link");
    firstChildItem.classList.add("md-nav__item--section-link-target");

    const navigateToSectionPage = (event) => {
      event.preventDefault();
      toggle.checked = true;
      const href = firstChildLink.getAttribute("href");
      if (!href) return;
      window.location.href = href;
    };

    label.addEventListener("click", navigateToSectionPage);
    label.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        navigateToSectionPage(event);
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountNavSectionLinks, { once: true });
} else {
  mountNavSectionLinks();
}
