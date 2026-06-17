"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const small = smallRef.current;
    const big = bigRef.current;
    if (!cursor || !small || !big) return;

    let rafId: number;
    let wasHovering = false;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        const under = document.elementFromPoint(e.clientX, e.clientY);
        const isHovering = !!(under?.closest("a, button"));

        if (isHovering !== wasHovering) {
          wasHovering = isHovering;
          if (isHovering) {
            big.style.transform = "translate(-50%, -50%) scale(1)";
            small.style.transform = "translate(-50%, -50%) scale(0)";
          } else {
            big.style.transform = "translate(-50%, -50%) scale(0)";
            small.style.transform = "translate(-50%, -50%) scale(1)";
          }
        }
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 80,
        height: 80,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-200px, -200px)",
      }}
    >
      <div
        ref={smallRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#d9f80f",
          transform: "translate(-50%, -50%)",
          transition: "transform 320ms cubic-bezier(.26,.01,.17,1)",
          zIndex: 5,
        }}
      />
      <div
        ref={bigRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid #d9f80f",
          transform: "translate(-50%, -50%) scale(0)",
          transition: "transform 320ms cubic-bezier(.26,.01,.17,1)",
          zIndex: 1,
        }}
      />
    </div>
  );
}
