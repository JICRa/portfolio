// src/components/Analytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

// Map routes to clean names (edit as needed)
const PAGE_TITLES = {
  "/": "Home",
  "/education": "Education",
  "/experience": "Experience",
  "/publications": "Publications",
  "/projects": "Projects",
  "/contact": "Contact",
};

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title = PAGE_TITLES[path] || "Portfolio";

    document.title = `${title} | José Contreras`;
    trackPageView({ path, title });
  }, [location.pathname]);

  return null;
}
