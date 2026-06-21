"use client";

import { useEffect, useRef, useState } from "react";

const ECHOES = [
  { lag: 90,  size: 8, opacity: 0.45 },
  { lag: 170, size: 6, opacity: 0.28 },
  { lag: 260, size: 5, opacity: 0.14 },
  { lag: 360, size: 4, opacity: 0.07 },
];

export default function CustomCursor() {
  const [hasMouse, setHasMouse] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const echoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHasMouse(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!hasMouse) return;
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
        const x = e.clientX / zoom;
        const y = e.clientY / zoom;

        // Main cursor container (80px, centered at pointer)
        cursor.style.transform = `translate(${x - 40}px, ${y - 40}px)`;

        // Echo dots — all target the same position, CSS transition creates lag
        echoRefs.current.forEach((echo, i) => {
          if (!echo) return;
          const half = ECHOES[i].size / 2;
          echo.style.transform = `translate(${x - half}px, ${y - half}px)`;
        });

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

    const onLeave = () => {
      cursor.style.opacity = "0";
      echoRefs.current.forEach((e) => { if (e) e.style.opacity = "0"; });
    };
    const onEnter = () => {
      cursor.style.opacity = "1";
      echoRefs.current.forEach((e, i) => { if (e) e.style.opacity = String(ECHOES[i].opacity); });
    };

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

  if (!hasMouse) return null;

  return (
    <>
      {/* Echo trail dots — each lags behind by its CSS transition duration */}
      {ECHOES.map((e, i) => (
        <div
          key={i}
          ref={(el) => { echoRefs.current[i] = el; }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: e.size,
            height: e.size,
            borderRadius: "50%",
            background: "#d9f80f",
            opacity: e.opacity,
            pointerEvents: "none",
            zIndex: 9997,
            transform: "translate(-200px, -200px)",
            transition: `transform ${e.lag}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            willChange: "transform",
          }}
        />
      ))}

      {/* Main cursor */}
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
    </>
  );
}
