"use client";

import { useEffect } from "react";
import { useSection } from "./SectionContext";

export default function SectionObserver() {
  const { setActiveSection } = useSection();

  useEffect(() => {
    const ids = ["hero", "about", "courts", "price", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
}
