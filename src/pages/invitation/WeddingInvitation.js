import React, { useEffect, useRef, useState } from "react";
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

const LOOP_RESET_DELAY = 700;
const CELEBRATION_DURATION = 4300;

const FIREWORK_PARTICLES = 24;
const CONFETTI_COUNT = 110;

const FIREWORKS = [
  {
    className: "firework-one",
    colorClass: "firework-gold",
    delay: 0,
  },
  {
    className: "firework-two",
    colorClass: "firework-blue",
    delay: 0.15,
  },
  {
    className: "firework-three",
    colorClass: "firework-rose",
    delay: 0.3,
  },
  {
    className: "firework-four",
    colorClass: "firework-cream",
    delay: 0.5,
  },
  {
    className: "firework-five",
    colorClass: "firework-gold",
    delay: 0.72,
  },
];

export default function WeddingInvitation() {
  const [openCards, setOpenCards] = useState([]);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragAngle, setDragAngle] = useState(0);

  // Card 7 temporarily stays open while the stack resets to card 1.
  const [loopingIndex, setLoopingIndex] = useState(null);

  // Celebration state.
  const [celebrate, setCelebrate] = useState(false);
  const [celebrationRun, setCelebrationRun] = useState(0);

  const loopTimer = useRef(null);
  const celebrationTimer = useRef(null);
  const completionCount = useRef(0);

  const dragData = useRef({
    startAngle: 0,
    currentAngle: 0,
    pinX: 0,
    pinY: 0,
  });

  const activeIndex = openCards.length;

  useEffect(() => {
    return () => {
      if (loopTimer.current) {
        clearTimeout(loopTimer.current);
      }

      if (celebrationTimer.current) {
        clearTimeout(celebrationTimer.current);
      }
    };
  }, []);

  const normalizeAngle = (angle) => {
    let result = angle;

    while (result > 180) result -= 360;
    while (result < -180) result += 360;

    return result;
  };

  /*
   * Read the actual CSS pivot.
   *
   * This keeps desktop and mobile synchronized even though
   * the transform-origin changes on smaller screens.
   */
  const getTransformOrigin = (element) => {
    const computedStyle = window.getComputedStyle(element);
    const origin = computedStyle.transformOrigin.split(" ");

    return {
      x: parseFloat(origin[0]) || 28,
      y: parseFloat(origin[1]) || 28,
    };
  };

  const handlePointerDown = (event, index) => {
    if (loopingIndex !== null) return;
    if (index !== activeIndex) return;

    event.preventDefault();

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const origin = getTransformOrigin(card);

    const pinX = rect.left + origin.x;
    const pinY = rect.top + origin.y;

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
      // Pointer capture may not be supported.
    }
  };

  const handlePointerMove = (event, index) => {
    if (draggingIndex !== index) return;

    event.preventDefault();

    const dx = event.clientX - dragData.current.pinX;

    const dy = event.clientY - dragData.current.pinY;

    const pointerAngle = Math.atan2(dy, dx) * (180 / Math.PI);

    let angle = normalizeAngle(pointerAngle - dragData.current.startAngle);

    // Clockwise only.
    angle = Math.max(0, angle);

    // Do not rotate beyond final position.
    angle = Math.min(OPEN_ANGLE, angle);

    dragData.current.currentAngle = angle;

    setDragAngle(angle);
  };

  /*
   * BIG CELEBRATION
   *
   * Called when CARD 7 BECOMES VISIBLE.
   *
   * Not when card 7 is later dragged.
   */
  const triggerCelebration = () => {
    completionCount.current += 1;

    /*
     * Changing the key recreates all particles.
     * Therefore the animation works again every cycle.
     */
    setCelebrationRun((previous) => previous + 1);

    setCelebrate(true);

    if (celebrationTimer.current) {
      clearTimeout(celebrationTimer.current);
    }

    celebrationTimer.current = setTimeout(() => {
      setCelebrate(false);
    }, CELEBRATION_DURATION);

    /*
     * GA4:
     * User has reached the final invitation page.
     */
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "invitation_completed", {
        invitation_pages: invitations.length,
        cycle_number: completionCount.current,
      });
    }
  };

  /*
   * Card 7 has been dragged.
   *
   * We now return to Card 1.
   *
   * NO celebration here because celebration already happened
   * when card 7 appeared.
   */
  const completeFinalCard = (index) => {
    setLoopingIndex(index);

    /*
     * Reset underlying stack immediately.
     *
     * Card 7 remains visually above it for 700 ms,
     * so card 1 appears underneath as card 7 swings away.
     */
    setOpenCards([]);

    loopTimer.current = setTimeout(() => {
      setLoopingIndex(null);
    }, LOOP_RESET_DELAY);
  };

  const handlePointerUp = (event, index) => {
    if (draggingIndex !== index) return;

    const finalAngle = dragData.current.currentAngle;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Pointer may already have been released.
    }

    const shouldOpen = finalAngle >= OPEN_THRESHOLD;

    if (shouldOpen) {
      const isLastCard = index === invitations.length - 1;

      if (isLastCard) {
        /*
         * Dragging card 7:
         * return to card 1.
         */
        completeFinalCard(index);
      } else {
        setOpenCards((previous) => {
          if (previous.includes(index)) {
            return previous;
          }

          return [...previous, index];
        });

        /*
         * CRITICAL:
         *
         * index 5 = card 6.
         *
         * When card 6 opens, CARD 7 is revealed.
         * THAT is when we celebrate.
         */
        if (index === invitations.length - 2) {
          triggerCelebration();
        }
      }
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
      {/* ===================================================
          BIG CELEBRATION
          =================================================== */}

      {celebrate && (
        <div
          key={celebrationRun}
          className="celebration-layer"
          aria-hidden="true"
        >
          {/* FIREWORKS */}
          {FIREWORKS.map(({ className, colorClass, delay }, fireworkIndex) => (
            <div
              key={`firework-${fireworkIndex}`}
              className={`firework ${className}`}
            >
              {Array.from({
                length: FIREWORK_PARTICLES,
              }).map((_, particleIndex) => (
                <span
                  key={particleIndex}
                  className={`firework-particle ${colorClass}`}
                  style={{
                    "--angle": `${
                      (360 / FIREWORK_PARTICLES) * particleIndex
                    }deg`,

                    "--delay": `${delay + particleIndex * 0.008}s`,

                    "--particle-size": `${5 + (particleIndex % 3)}px`,
                  }}
                />
              ))}
            </div>
          ))}

          {/* SECOND SMALLER FIREWORK RING */}
          <div className="firework firework-center">
            {Array.from({
              length: 18,
            }).map((_, index) => (
              <span
                key={`center-${index}`}
                className="firework-particle firework-white firework-small"
                style={{
                  "--angle": `${(360 / 18) * index}deg`,
                  "--delay": `${0.9 + index * 0.01}s`,
                  "--particle-size": "4px",
                }}
              />
            ))}
          </div>

          {/* CONFETTI */}
          <div className="confetti-container">
            {Array.from({
              length: CONFETTI_COUNT,
            }).map((_, index) => {
              const left = (index * 47 + 11) % 100;

              const delay = (index % 18) * 0.035;

              const duration = 2.4 + (index % 8) * 0.15;

              const drift = ((index % 13) - 6) * 18;

              const rotation = 540 + (index % 8) * 140;

              const width = 5 + (index % 4);

              const height = 9 + (index % 5) * 2;

              return (
                <span
                  key={`confetti-${index}`}
                  className={`celebration-confetti confetti-color-${index % 6}`}
                  style={{
                    "--left": `${left}%`,
                    "--delay": `${delay}s`,
                    "--duration": `${duration}s`,
                    "--drift": `${drift}px`,
                    "--rotation": `${rotation}deg`,
                    "--confetti-width": `${width}px`,
                    "--confetti-height": `${height}px`,
                  }}
                />
              );
            })}
          </div>

          {/* SIDE BURSTS */}
          <div className="celebration-side-burst celebration-side-left">✦</div>

          <div className="celebration-side-burst celebration-side-right">✦</div>
        </div>
      )}

      {/* ===================================================
          INVITATION
          =================================================== */}

      <div className="invitation-stage">
        <div className="invitation-stack">
          {invitations.map((image, index) => {
            const isOpen = openCards.includes(index);

            const isActive = index === activeIndex && loopingIndex === null;

            const isDragging = draggingIndex === index;

            const isLooping = loopingIndex === index;

            let angle = 0;

            if (isLooping) {
              angle = OPEN_ANGLE;
            } else if (isOpen) {
              angle = OPEN_ANGLE;
            } else if (isDragging) {
              angle = dragAngle;
            }

            let zIndex;

            if (isLooping) {
              /*
               * Card 7 stays above card 1 during reset.
               */
              zIndex = 900;
            } else if (isOpen) {
              zIndex = index + 1;
            } else {
              zIndex = invitations.length - index + 20;
            }

            return (
              <div
                key={index}
                className={[
                  "invitation-card",

                  isActive ? "invitation-card-active" : "",

                  isOpen ? "invitation-card-open" : "",

                  isDragging ? "invitation-card-dragging" : "",

                  isLooping ? "invitation-card-looping" : "",
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

          {/* PIN */}

          <div className="invitation-pin" aria-hidden="true">
            <div className="invitation-pin-center" />
          </div>
        </div>

        {/* INFORMATION */}

        <div className="invitation-info">
          <p className="invitation-help">
            {activeIndex === invitations.length - 1
              ? "¡Nos vemos en Chile! ❤️"
              : "Drag to discover more"}
          </p>

          <p className="invitation-progress">
            {Math.min(activeIndex + 1, invitations.length)} /{" "}
            {invitations.length}
          </p>
        </div>
      </div>
    </main>
  );
}
