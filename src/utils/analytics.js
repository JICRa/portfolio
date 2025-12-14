// src/utils/analytics.js

export function trackPageView({ path, title }) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    screen_name: title,
  });
}

export function trackOutboundClick({ label, url }) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  let domain = "";
  try {
    domain = new URL(url).hostname;
  } catch (e) {
    // handles mailto:, tel:, or malformed URL
    domain = "";
  }

  window.gtag("event", "click", {
    link_text: label,
    link_url: url,
    link_domain: domain,
    outbound: true,
  });
}
