import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

  // Optional outbound tracker — won't break if not defined elsewhere
  const trackOutboundClick = (label, url) => {
    if (window && window.gtag) {
      window.gtag("event", "click", {
        event_category: "outbound",
        event_label: label,
        transport_type: "beacon",
        event_callback: () => {
          window.open(url, "_blank");
        },
      });
    }
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>

              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              <SocialMedia theme={theme} />

              <div className="button-greeting-div">
                {/* Contact Button */}
                <Button text="Contact me" href="/contact" theme={theme} />

                {/* Resume Button (optional) */}
                {greeting.resumeLink && (
                  <Button
                    text="See my Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                    onClick={() =>
                      trackOutboundClick("Resume", greeting.resumeLink)
                    }
                  />
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
