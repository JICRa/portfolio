import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { trackOutboundClick } from "../../utils/analytics"; // ✅ use shared GA4 tracker
// import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

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
                {/* Internal navigation (no outbound tracking) */}
                <Button text="Contact me" href="/contact" theme={theme} />

                {/* Resume Button (outbound tracking) */}
                {greeting.resumeLink && (
                  <Button
                    text="See my Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                    onClick={() =>
                      trackOutboundClick({
                        label: "CV PDF",
                        url: greeting.resumeLink,
                      })
                    }
                  />
                )}
              </div>
            </div>
          </div>

          {/*
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
          */}

          <div className="greeting-image-div">
            <img
              src={require("../../assets/images/Scientists-12.jpg")}
              alt="Jose Contreras"
              style={{
                width: "100%",
                maxWidth: "800px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
