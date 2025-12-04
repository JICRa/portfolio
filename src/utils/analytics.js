// src/utils/analytics.js

export function trackPageView(path) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  });
}

// src/utils/analytics.js
export function trackOutboundClick(label, url) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "outbound_click", {
    event_category: "engagement",
    event_label: label, // e.g. "CV Resume"
    destination: url,
  });
}
