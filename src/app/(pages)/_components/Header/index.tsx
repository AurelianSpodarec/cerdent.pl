'use client'

import HeaderDesktop from "./Desktop";
import HeaderMobile from "./Mobile";

import { useScrollHeader } from "./useScrollHeader";

export default function WebHeader() {
  const { hidden } = useScrollHeader();

  return (
    <header
      className={`
        fixed left-0 right-0 z-40 h-[60px]
        ${hidden ? "-top-[60px]" : "top-0"}
        transition-[top] duration-300
        text-white bg-black
        m-4 rounded-sm
        max-w-[1000px] mx-auto
      `}
    >
      <div className="flex items-center h-full">
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  );
}
