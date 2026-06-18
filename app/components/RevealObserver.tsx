"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const check = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("revealed");
        }
      });
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return null;
}
