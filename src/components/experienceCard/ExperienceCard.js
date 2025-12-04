import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const { experience, theme, side = "left", timelineLabel } = this.props;

    const textCard = (
      <Fade bottom duration={1200} distance="30px">
        <div
          className="experience-card"
          style={{ background: theme.white || theme.white }}
        >
          <h3 className="experience-card-title" style={{ color: theme.text }}>
            {experience["title"]}
          </h3>

          <p
            className="experience-card-department"
            style={{ color: theme.secondaryText }}
          >
            {experience["department"]}
          </p>

          {/*
          <p className="experience-card-company">
            <a
              href={experience["company_url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience["company"]}
            </a>
          </p>
          
          <p
            className="experience-card-location"
            style={{ color: theme.secondaryText }}
          >
            {experience["location"]}
          </p>

          <p
            className="experience-card-duration"
            style={{ color: theme.secondaryText }}
          >
            {experience["duration"]}
          </p>
          */}
          <div
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {Array.isArray(experience.description) ? (
              <ul>
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              experience.description
            )}
          </div>
        </div>
      </Fade>
    );

    const logoCard = (
      <div className="timeline-logo-card">
        {/* colored header strip with duration */}
        <div
          className="timeline-logo-header"
          style={{
            backgroundColor: theme.headerColor,
            color: theme.body,
          }}
        >
          <span className="timeline-logo-duration">
            {experience["duration"]}
          </span>
        </div>

        <div className="timeline-logo-body">
          <img
            className="timeline-logo-image"
            src={require(`../../assets/images/${experience["logo_path"]}`)}
            alt={experience["company"]}
          />
          <div className="timeline-logo-text">
            <p className="timeline-logo-company">{experience["company"]}</p>
            <p className="timeline-logo-location">{experience["location"]}</p>
          </div>
        </div>
      </div>
    );

    return (
      <div className={`timeline-item ${side}`}>
        <div className="timeline-columns">
          {/* LEFT COLUMN */}
          <div className="timeline-col">
            {side === "left" ? textCard : logoCard}
          </div>

          {/* CENTER (TIMELINE + DOT + OPTIONAL YEAR LABEL) */}
          <div className="timeline-center">
            <span
              className="timeline-dot"
              style={{ backgroundColor: theme.headerColor }}
            />
            {timelineLabel && (
              <div className="timeline-year-label">{timelineLabel}</div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="timeline-col">
            {side === "left" ? logoCard : textCard}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
