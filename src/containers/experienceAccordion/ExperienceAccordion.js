import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const { theme, sections } = this.props;

    // Merge Work + Internships into one timeline
    const workAndInternships = [];
    let volunteering = [];

    sections.forEach((section) => {
      if (section.title === "Volunteerships") {
        volunteering = section.experiences;
      } else {
        workAndInternships.push(...section.experiences);
      }
    });

    return (
      <div className="experience-accord">
        {/* Main vertical timeline */}
        <div
          className="timeline"
          style={{
            "--timeline-line-color": theme.headerColor,
            "--timeline-label-bg": theme.body,
            "--timeline-label-text": theme.text,
          }}
        >
          <div className="timeline-present-label">Present</div>

          {workAndInternships.map((experience, index) => {
            const country = (experience.country || "").toLowerCase();
            const side =
              country === "switzerland"
                ? "left"
                : country === "chile"
                ? "right"
                : index % 2 === 0
                ? "left"
                : "right";

            return (
              <ExperienceCard
                key={experience.title + index}
                experience={experience}
                index={index}
                theme={theme}
                side={side}
              />
            );
          })}
        </div>

        {/* Volunteering section below timeline */}
        {volunteering.length > 0 && (
          <div className="experience-volunteering">
            <h2
              className="experience-volunteering-title"
              style={{ color: theme.text }}
            >
              Leadership & Volunteering
            </h2>
            <div className="experience-volunteering-list">
              {volunteering.map((experience, index) => (
                <ExperienceCard
                  key={experience.title + index}
                  experience={experience}
                  index={index}
                  theme={theme}
                  side="right"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ExperienceAccordion;
