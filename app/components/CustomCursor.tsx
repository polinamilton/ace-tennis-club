"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!cursor || !dot || !ring) return;

    let rafId: number;
    let wasHovering = false;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const zoom = Math.max(0.1, parseFloat(document.documentElement.style.zoom) || 1);
        // Subtract 40 (half of 80px container) so the center tracks the pointer
        const x = e.clientX / zoom - 40;
        const y = e.clientY / zoom - 40;
        cursor.style.transform = `translate(${x}px, ${y}px)`;

        const under = document.elementFromPoint(e.clientX, e.clientY);
        const isHovering = !!(under?.closest("a, button"));

        if (isHovering !== wasHovering) {
          wasHovering = isHovering;
          if (isHovering) {
            ring.style.transform = "translate(-50%, -50%) scale(1)";
            dot.style.transform = "translate(-50%, -50%) scale(0)";
          } else {
            ring.style.transform = "translate(-50%, -50%) scale(0)";
            dot.style.transform = "translate(-50%, -50%) scale(1)";
          }
        }
      });
    };

    const onLeave = () => { cursor.style.opacity = "0"; };
    const onEnter = () => { cursor.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
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
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-200px, -200px)",
        willChange: "transform",
        transition: "opacity 150ms",
      }}
    >
      {/* Dot — visible when not hovering */}
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#d9f80f",
          transform: "translate(-50%, -50%) scale(1)",
          transition: "transform 220ms cubic-bezier(.26,.01,.17,1)",
        }}
      />
      {/* Ring — visible when hovering a link or button */}
      <div
        ref={ringRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid #d9f80f",
          transform: "translate(-50%, -50%) scale(0)",
          transition: "transform 220ms cubic-bezier(.26,.01,.17,1)",
        }}
      />
    </div>
  );
}
