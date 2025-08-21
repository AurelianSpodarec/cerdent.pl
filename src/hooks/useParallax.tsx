'use client'

import { useEffect, useRef } from "react";

type ParallaxOptions = {
  speed?: number;
  inheritParentTransform?: boolean;
};

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.2,
  inheritParentTransform = false,
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function setTranslate(x: number, y: number, el: HTMLElement) {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    function scrollLoop() {
      const yScroll = window.scrollY;

      if (inheritParentTransform) {
        const parentY = node.parentElement?.getBoundingClientRect().top ?? 0;
        setTranslate(0, (yScroll - parentY) * -speed, node);
      } else {
        // independent mode
        setTranslate(0, yScroll * -speed, node);
      }
    }

    window.addEventListener("scroll", scrollLoop, { passive: true });
    return () => window.removeEventListener("scroll", scrollLoop);
  }, [speed, inheritParentTransform]);

  return { ref };
}
