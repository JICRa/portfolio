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
const OPEN_THRESHOLD = 5;

export default function WeddingInvitation() {
  const [openCards, setOpenCards] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragAngle, setDragAngle] = useState(0);

  const dragData = useRef({
    startAngle: 0,
    currentAngle: 0,
    pinX: 0,
    pinY: 0,
  });

  const activeIndex = openCards.length;

  const normalizeAngle = (angle) => {
    let result = angle;

    while (result > 180) result -= 360;
    while (result < -180) result += 360;

    return result;
  };

  const handlePointerDown = (event, index) => {
    if (index !== activeIndex) return;

    event.preventDefault();

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const pinX = rect.left + 28;
    const pinY = rect.top + 28;

    const dx = event.clientX - pinX;
    const dy = event.clientY - pinY;

    dragData.current = {
      pinX,
      pinY,
      startAngle: Math.atan2(dy, dx) * (180 / Math.PI),
      currentAngle: 0,
    };

    setDraggingIndex(index);
    setDragAngle(0);

    try {
      card.setPointerCapture(event.pointerId);
    } catch (error) {
      // no action needed
    }
  };

  const handlePointerMove = (event, index) => {
    if (draggingIndex !== index) return;

    event.preventDefault();

    const dx = event.clientX - dragData.current.pinX;
    const dy = event.clientY - dragData.current.pinY;

    const pointerAngle = Math.atan2(dy, dx) * (180 / Math.PI);

    let angle = normalizeAngle(pointerAngle - dragData.current.startAngle);

    // Only clockwise
    angle = Math.max(0, angle);

    // Limit manual rotation
    angle = Math.min(OPEN_ANGLE, angle);

    // IMPORTANT:
    // keep the latest value outside React state
    dragData.current.currentAngle = angle;

    setDragAngle(angle);
  };

  const handlePointerUp = (event, index) => {
    if (draggingIndex !== index) return;

    const finalAngle = dragData.current.currentAngle;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch (error) {
      // already released
    }

    if (finalAngle >= OPEN_THRESHOLD) {
      setOpenCards((previous) => {
        if (previous.includes(index)) {
          return previous;
        }

        return [...previous, index];
      });
    }

    setDraggingIndex(null);
    setDragAngle(0);

    dragData.current.currentAngle = 0;
  };

  const handlePointerCancel = (event, index) => {
    handlePointerUp(event, index);
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

            const zIndex = isOpen ? index + 1 : invitations.length - index + 20;

            return (
              <div
                key={index}
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
                onPointerCancel={(event) => handlePointerCancel(event, index)}
              >
                <img
                  src={image}
                  alt={`Wedding invitation ${index + 1}`}
                  draggable="false"
                />
              </div>
            );
          })}

          <div className="invitation-pin" aria-hidden="true">
            <div className="invitation-pin-center" />
          </div>
        </div>

        <div className="invitation-info">
          <p className="invitation-help">Drag to discover more</p>

          <p className="invitation-progress">
            {Math.min(activeIndex + 1, invitations.length)} /{" "}
            {invitations.length}
          </p>
        </div>
      </div>
    </main>
  );
}
