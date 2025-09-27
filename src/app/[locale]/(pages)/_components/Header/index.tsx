'use client'

import { useEffect, useState } from "react";
import HeaderDesktop from "./Desktop";
import Container from "@/components/_layout/Container";

// Hook to detect scroll past header
function useScrollHeaderBorder(headerHeight: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > headerHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check immediately on mount
    setScrolled(window.scrollY > headerHeight);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  return scrolled;
}


export default function WebHeader() {
  const HEADER_HEIGHT = 60;
  const scrolled = useScrollHeaderBorder(HEADER_HEIGHT);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 `}>
      <Container size="wide">
        <div className={`transition-all duration-300
        backdrop-blur-2xl
        h-[60px] my-2
        bg-white/70
        rounded-lg
          ${scrolled ? "border border-[#dcdcdc]/70 my-5 header-shadow" : "border-transparent"}
        `}>
          <div className="flex items-center h-full">
            <HeaderDesktop />
          </div>
        </div>
      </Container>
    </header>
  );
}
