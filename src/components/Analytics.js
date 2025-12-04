// src/components/Analytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Each time the route changes, send a page_view
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn’t render anything
}

export default Analytics;
