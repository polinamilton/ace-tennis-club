"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const SectionContext = createContext<{
  activeSection: string;
  setActiveSection: (id: string) => void;
}>({ activeSection: "hero", setActiveSection: () => {} });

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");
  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  return useContext(SectionContext);
}
