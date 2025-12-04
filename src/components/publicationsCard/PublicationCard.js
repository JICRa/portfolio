import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard({ pub, theme }) {
  const {
    title,
    name,
    description,
    url,
    journal,
    year,
    isFirstAuthor,
    type,
    bullets,
  } = pub;

  const displayTitle = title || name || "Untitled publication";
  const displayDescription = description || "";
  const displayYear = year || "";
  const displayType = type || "Journal article";

  const authorLine =
    isFirstAuthor === false
      ? "José I. Contreras Raggio · et al. (not first author)"
      : "José I. Contreras Raggio · et al.";

  const hasBullets = Array.isArray(bullets) && bullets.length > 0;

  function openPublication() {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div
      className="publication-card-div"
      onClick={openPublication}
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={600} distance="12px">
        <div className="publication-card-inner">
          {/* Title */}
          <p className="publication-title" style={{ color: theme.text }}>
            {displayTitle}
          </p>

          {/* Meta row: type badge + journal + year */}
          <div className="publication-meta-row">
            {displayType && (
              <span
                className="publication-type-badge"
                style={{
                  borderColor: theme.secondaryText,
                  backgroundColor: theme.secondaryText,
                  color: theme.body,
                }}
              >
                {displayType}
              </span>
            )}
            {journal && (
              <span
                className="publication-meta-text"
                style={{ color: theme.text }}
              >
                {journal}
              </span>
            )}
            {displayYear && (
              <>
                <span
                  className="publication-meta-separator"
                  style={{ color: theme.text }}
                >
                  ·
                </span>
                <span
                  className="publication-meta-text"
                  style={{ color: theme.text }}
                >
                  {displayYear}
                </span>
              </>
            )}
          </div>

          {/* Authors */}
          <p className="publication-authors" style={{ color: theme.text }}>
            {authorLine}
          </p>

          {/* Description as bullet list (preferred) or fallback paragraph */}
          {hasBullets ? (
            <ul className="publication-bullets" style={{ color: theme.text }}>
              {bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            displayDescription && (
              <p
                className="publication-description"
                style={{ color: theme.text }}
              >
                {displayDescription}
              </p>
            )
          )}

          {/* View button */}
          {url && (
            <div className="publication-view-wrapper">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-view-button"
                style={{
                  backgroundColor: theme.text,
                  color: theme.body,
                  borderColor: theme.text,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <span>View</span>
                <span className="publication-view-arrow">↗</span>
              </a>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
}
