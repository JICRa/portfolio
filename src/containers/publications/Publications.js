import React from "react";
import "./Publications.css";
import { publicationsHeader, publications } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Publications(props) {
  const theme = props.theme;

  return (
    <div className="main" id="publications">
      <Fade bottom duration={2000} distance="40px">
        <div className="publications-header">
          <h1 className="publication-title" style={{ color: theme.text }}>
            {publicationsHeader.title}
          </h1>
          <p
            className="publication-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {publicationsHeader.description}
          </p>
        </div>
      </Fade>

      <div className="publications-body">
        {publications.data.map((pub) => (
          <div className="publication-card" key={pub.id}>
            <h3 style={{ color: theme.text }}>{pub.name}</h3>
            <p style={{ color: theme.secondaryText }}>{pub.description}</p>
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link"
                style={{ color: theme.secondaryText }}
              >
                View publication
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
