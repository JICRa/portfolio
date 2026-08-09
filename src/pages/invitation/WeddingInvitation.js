import React, { useRef, useState } from "react";
import "./WeddingInvitation.css";

import invitation01 from "../../assets/images/wedding/Hochzeitseinladung-1.png";
import invitation02 from "../../assets/images/wedding/Hochzeitseinladung-2.png";
import invitation03 from "../../assets/images/wedding/Hochzeitseinladung-3.png";
import invitation04 from "../../assets/images/wedding/Hochzeitseinladung-4.png";
import invitation05 from "../../assets/images/wedding/Hochzeitseinladung-5.png";
import invitation06 from "../../assets/images/wedding/Hochzeitseinladung-6.png";
import invitation07 from "../../assets/images/wedding/Hochzeitseinladung-7.png";

const invitations = [
  invitation01,
  invitation02,
  invitation03,
  invitation04,
  invitation05,
  invitation06,
  invitation07,
];

const OPEN_ANGLE = 105;
const OPEN_THRESHOLD = 25;

export default function WeddingInvitation() {
  const [openCards, setOpenCards] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragAngle, setDragAngle] = useState(0);

  const cardRefs = useRef([]);

  /*
   * The first card that has not yet been opened
   * is considered the active/top card.
   */
  const activeIndex = openCards.length;

  const getPointerAngle = (event, card) => {
    const rect = card.getBoundingClientRect();

    /*
     * Pin position corresponds to the CSS pin position.
     */
    const pinX = rect.left + 30;
    const pinY = rect.top + 30;

    const deltaX = event.clientX - pinX;
    const deltaY = event.clientY - pinY;

    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  const handlePointerDown = (event, index) => {
    /*
     * Only the current top card can be moved forward.
     */
    if (index !== activeIndex) return;

    const card = cardRefs.current[index];
    if (!card) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    const startAngle = getPointerAngle(event, card);

    event.currentTarget.dataset.startPointerAngle = startAngle;

    setDraggingIndex(index);
    setDragAngle(0);
  };

  const handlePointerMove = (event, index) => {
    if (draggingIndex !== index) return;

    const card = cardRefs.current[index];
    if (!card) return;

    const startAngle = parseFloat(
      event.currentTarget.dataset.startPointerAngle
    );

    const currentPointerAngle = getPointerAngle(event, card);

    let angle = currentPointerAngle - startAngle;

    /*
     * Prevent counter-clockwise opening.
     */
    angle = Math.max(0, angle);

    /*
     * Limit maximum rotation.
     */
    angle = Math.min(OPEN_ANGLE, angle);

    setDragAngle(angle);
  };

  const handlePointerUp = (event, index) => {
    if (draggingIndex !== index) return;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Pointer capture may already have been released.
    }

    /*
     * If dragged far enough, open the card.
     * Otherwise return it to its original position.
     */
    if (dragAngle >= OPEN_THRESHOLD) {
      setOpenCards((previous) => [...previous, index]);
    }

    setDraggingIndex(null);
    setDragAngle(0);
  };

  /*
   * Clicking/tapping an opened card resets one step.
   *
   * This gives guests a simple way to go backwards
   * without adding carousel arrows.
   */
  const handleOpenedCardClick = (index) => {
    if (draggingIndex !== null) return;

    /*
     * Only close the most recently opened card.
     */
    if (index === activeIndex - 1) {
      setOpenCards((previous) => previous.slice(0, -1));
    }
  };

  return (
    <main className="wedding-page">
      <div className="invitation-stage">
        <div className="invitation-stack">
          {invitations.map((image, index) => {
            const isOpen = openCards.includes(index);
            const isActive = index === activeIndex;
            const isDragging = draggingIndex === index;

            let angle = 0;

            if (isOpen) {
              angle = OPEN_ANGLE;
            } else if (isDragging) {
              angle = dragAngle;
            }

            /*
             * Cards farther down receive lower z-index values.
             */
            let zIndex = invitations.length - index + 10;

            if (isOpen) {
              zIndex = index + 1;
            }

            return (
              <div
                key={index}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={[
                  "invitation-card",
                  isActive ? "invitation-card-active" : "",
                  isOpen ? "invitation-card-open" : "",
                  isDragging ? "invitation-card-dragging" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{
                  transform: `rotate(${angle}deg)`,
                  zIndex,
                }}
                onPointerDown={(event) => handlePointerDown(event, index)}
                onPointerMove={(event) => handlePointerMove(event, index)}
                onPointerUp={(event) => handlePointerUp(event, index)}
                onPointerCancel={(event) => handlePointerUp(event, index)}
                onClick={() => {
                  if (isOpen) {
                    handleOpenedCardClick(index);
                  }
                }}
              >
                <img
                  src={image}
                  alt={`Wedding invitation ${index + 1}`}
                  draggable="false"
                />
              </div>
            );
          })}

          {/* Physical-looking pin */}
          <div className="invitation-pin" aria-hidden="true">
            <div className="invitation-pin-center" />
          </div>
        </div>

        <p className="invitation-help">Drag the invitation to discover more</p>

        <p className="invitation-progress">
          {Math.min(activeIndex + 1, invitations.length)} / {invitations.length}
        </p>
      </div>
    </main>
  );
}
