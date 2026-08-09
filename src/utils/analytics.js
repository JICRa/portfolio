// src/components/Analytics.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

const PAGE_TITLES = {
  "/": "Home",
  "/home": "Home",
  "/education": "Education",
  "/experience": "Experience",
  "/publications": "Publications",
  "/projects": "Projects",
  "/contact": "Contact",

  // Private/direct wedding page
  "/invitation": "Wedding Invitation",
};

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title = PAGE_TITLES[path] || "Portfolio";

    document.title = `${title} | José Contreras`;

    trackPageView({
      path,
      title,
    });
  }, [location.pathname]);

  return null;
}
