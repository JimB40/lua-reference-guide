(function () {
  function getNavLabelText(element) {
    return element?.querySelector(".md-ellipsis")?.textContent?.trim() || "";
  }

  const API_REFERENCE_SECTION_BY_SLUG = {
    "bitmap-get-size": "Display LCD",
    "bitmap-open": "Display LCD",
    "bitmap-resize": "Display LCD",
    "bitmap-to-mask": "Display LCD",
    "lcd-clear": "Display LCD",
    "lcd-draw-annulus": "Display LCD",
    "lcd-draw-arc": "Display LCD",
    "lcd-draw-bitmap": "Display LCD",
    "lcd-draw-bitmap-pattern": "Display LCD",
    "lcd-draw-bitmap-pattern-pie": "Display LCD",
    "lcd-draw-channel": "Display LCD",
    "lcd-draw-circle": "Display LCD",
    "lcd-draw-combobox": "Display LCD",
    "lcd-draw-filled-circle": "Display LCD",
    "lcd-draw-filled-rectangle": "Display LCD",
    "lcd-draw-filled-triangle": "Display LCD",
    "lcd-draw-gauge": "Display LCD",
    "lcd-draw-hud-rectangle": "Display LCD",
    "lcd-draw-line": "Display LCD",
    "lcd-draw-line-with-clipping": "Display LCD",
    "lcd-draw-number": "Display LCD",
    "lcd-draw-pie": "Display LCD",
    "lcd-draw-pixmap": "Display LCD",
    "lcd-draw-point": "Display LCD",
    "lcd-draw-rectangle": "Display LCD",
    "lcd-draw-screen-title": "Display LCD",
    "lcd-draw-source": "Display LCD",
    "lcd-draw-switch": "Display LCD",
    "lcd-draw-text": "Display LCD",
    "lcd-draw-text-lines": "Display LCD",
    "lcd-draw-timer": "Display LCD",
    "lcd-draw-triangle": "Display LCD",
    "lcd-exit-full-screen": "Display LCD",
    "lcd-get-color": "Display LCD",
    "lcd-get-last-left-pos": "Display LCD",
    "lcd-get-last-pos": "Display LCD",
    "lcd-get-last-right-pos": "Display LCD",
    "lcd-invert-rect": "Display LCD",
    "lcd-refresh": "Display LCD",
    "lcd-reset-backlight-timeout": "Display LCD",
    "lcd-rgb": "Display LCD",
    "lcd-set-color": "Display LCD",
    "lcd-size-text": "Display LCD",
    "lvgl-align": "Display LVGL",
    "lvgl-arc": "Display LVGL",
    "lvgl-box": "Display LVGL",
    "lvgl-build": "Display LVGL",
    "lvgl-button": "Display LVGL",
    "lvgl-choice": "Display LVGL",
    "lvgl-circle": "Display LVGL",
    "lvgl-clear": "Display LVGL",
    "lvgl-close": "Display LVGL",
    "lvgl-color": "Display LVGL",
    "lvgl-confirm": "Display LVGL",
    "lvgl-dialog": "Display LVGL",
    "lvgl-disable": "Display LVGL",
    "lvgl-enable": "Display LVGL",
    "lvgl-exit-full-screen": "Display LVGL",
    "lvgl-file": "Display LVGL",
    "lvgl-font": "Display LVGL",
    "lvgl-get-context": "Display LVGL",
    "lvgl-get-scroll-pos": "Display LVGL",
    "lvgl-hide": "Display LVGL",
    "lvgl-hline": "Display LVGL",
    "lvgl-image": "Display LVGL",
    "lvgl-is-app-mode": "Display LVGL",
    "lvgl-is-full-screen": "Display LVGL",
    "lvgl-label": "Display LVGL",
    "lvgl-line": "Display LVGL",
    "lvgl-menu": "Display LVGL",
    "lvgl-message": "Display LVGL",
    "lvgl-momentary-button": "Display LVGL",
    "lvgl-number-edit": "Display LVGL",
    "lvgl-page": "Display LVGL",
    "lvgl-qrcode": "Display LVGL",
    "lvgl-rectangle": "Display LVGL",
    "lvgl-set": "Display LVGL",
    "lvgl-setting": "Display LVGL",
    "lvgl-show": "Display LVGL",
    "lvgl-slider": "Display LVGL",
    "lvgl-source": "Display LVGL",
    "lvgl-switch": "Display LVGL",
    "lvgl-text-edit": "Display LVGL",
    "lvgl-timer": "Display LVGL",
    "lvgl-toggle": "Display LVGL",
    "lvgl-triangle": "Display LVGL",
    "lvgl-vertical-slider": "Display LVGL",
    "lvgl-vline": "Display LVGL",
    "model-default-inputs": "Model Functions",
    "model-delete-flight-modes": "Model Functions",
    "model-delete-input": "Model Functions",
    "model-delete-inputs": "Model Functions",
    "model-delete-mix": "Model Functions",
    "model-delete-mixes": "Model Functions",
    "model-get-curve": "Model Functions",
    "model-get-custom-function": "Model Functions",
    "model-get-flight-mode": "Model Functions",
    "model-get-global-variable": "Model Functions",
    "model-get-info": "Model Functions",
    "model-get-input": "Model Functions",
    "model-get-inputs-count": "Model Functions",
    "model-get-logical-switch": "Model Functions",
    "model-get-mix": "Model Functions",
    "model-get-mixes-count": "Model Functions",
    "model-get-module": "Model Functions",
    "model-get-output": "Model Functions",
    "model-get-sensor": "Model Functions",
    "model-get-swash-ring": "Model Functions",
    "model-get-switch-warning": "Model Functions",
    "model-get-timer": "Model Functions",
    "model-insert-input": "Model Functions",
    "model-insert-mix": "Model Functions",
    "model-reset-sensor": "Model Functions",
    "model-reset-timer": "Model Functions",
    "model-set-curve": "Model Functions",
    "model-set-custom-function": "Model Functions",
    "model-set-flight-mode": "Model Functions",
    "model-set-global-variable": "Model Functions",
    "model-set-info": "Model Functions",
    "model-set-logical-switch": "Model Functions",
    "model-set-module": "Model Functions",
    "model-set-output": "Model Functions",
    "model-set-swash-ring": "Model Functions",
    "model-set-switch-warning": "Model Functions",
    "model-set-timer": "Model Functions",
    "runtime-access-telemetry-push": "Telemetry",
    "runtime-apply-rgbled-colors": "Radio Hardware",
    "runtime-chdir": "Filesystem",
    "runtime-crossfire-telemetry-pop": "Telemetry",
    "runtime-crossfire-telemetry-push": "Telemetry",
    "runtime-default-channel": "Radio Hardware",
    "runtime-default-stick": "Radio Hardware",
    "runtime-del": "Filesystem",
    "runtime-dir": "Filesystem",
    "runtime-flush-audio": "Audio-Sound",
    "runtime-fstat": "Filesystem",
    "runtime-get-available-memory": "System",
    "runtime-get-date-time": "Time",
    "runtime-get-field-info": "Sources",
    "runtime-get-flight-mode": "Model Functions",
    "runtime-get-general-settings": "System",
    "runtime-get-global-timer": "Time",
    "runtime-get-logical-switch-value": "Switches",
    "runtime-get-output-value": "Model Functions",
    "runtime-get-ras": "RF module",
    "runtime-get-rot-enc-mode": "Radio Hardware",
    "runtime-get-rot-enc-speed": "Radio Hardware",
    "runtime-get-rssi": "Telemetry",
    "runtime-get-rtc-time": "Time",
    "runtime-get-shm-var": "Variables",
    "runtime-get-source-index": "Sources",
    "runtime-get-source-name": "Sources",
    "runtime-get-source-value": "Sources",
    "runtime-get-stick-mode": "Radio Hardware",
    "runtime-get-switch-index": "Switches",
    "runtime-get-switch-info": "Switches",
    "runtime-get-switch-name": "Switches",
    "runtime-get-switch-value": "Switches",
    "runtime-get-time": "Time",
    "runtime-get-trainer-status": "Radio Hardware",
    "runtime-get-tx-gps": "Radio Hardware",
    "runtime-get-usage": "System",
    "runtime-get-value": "Sources",
    "runtime-get-version": "System",
    "runtime-ghost-telemetry-pop": "Telemetry",
    "runtime-ghost-telemetry-push": "Telemetry",
    "runtime-grey": "Display LCD",
    "runtime-kill-events": "Radio Hardware",
    "runtime-load-script": "Lua Scripts",
    "runtime-mkdir": "Filesystem",
    "runtime-multi-buffer": "RF module",
    "runtime-play-duration": "Audio-Sound",
    "runtime-play-file": "Audio-Sound",
    "runtime-play-haptic": "Audio-Sound",
    "runtime-play-number": "Audio-Sound",
    "runtime-play-tone": "Audio-Sound",
    "runtime-popup-confirmation": "Display LCD",
    "runtime-popup-input": "Display LCD",
    "runtime-popup-warning": "Display LCD",
    "runtime-rename": "Filesystem",
    "runtime-reset-global-timer": "Time",
    "runtime-serial-get-power": "Serial Ports",
    "runtime-serial-read": "Serial Ports",
    "runtime-serial-set-power": "Serial Ports",
    "runtime-serial-write": "Serial Ports",
    "runtime-set-cfsled-color": "Radio Hardware",
    "runtime-set-imu-x": "Radio Hardware",
    "runtime-set-imu-y": "Radio Hardware",
    "runtime-set-rgbled-color": "Radio Hardware",
    "runtime-set-serial-baudrate": "Serial Ports",
    "runtime-set-shm-var": "Variables",
    "runtime-set-sticky-switch": "Switches",
    "runtime-set-telemetry-value": "Telemetry",
    "runtime-sources": "Sources",
    "runtime-sport-telemetry-pop": "Telemetry",
    "runtime-sport-telemetry-push": "Telemetry",
    "runtime-switches": "Switches"
  };

  function sectionKeyForPath(pathname) {
    const match = pathname.toLowerCase().match(/\/api-reference\/([^/]+)\/?$/);
    if (!match) return null;
    return API_REFERENCE_SECTION_BY_SLUG[match[1]] || null;
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

    const siteRootHref = new URL("../..", window.location.href).pathname;
    const apiReferenceHref = new URL("../", window.location.href).pathname;
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
    const activeSectionKey = sectionKeyForPath(window.location.pathname);
    if (!primaryNav || !activeSectionKey) {
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
      (link) => getNavLabelText(link) === activeSectionKey,
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
