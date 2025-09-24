'use client'

import HeaderDesktop from "./Desktop";

export default function WebHeader() {
  return (
    <header
      className={`
        fixed left-0 right-0 z-40 h-[60px]
        transition-[top] duration-300
        top-0
        backdrop-blur-2xl
        bg-white/70
        border border-[#dcdcdc]/70
        m-4 rounded-lg
        max-w-[1200px] mx-auto
      `}
    >
      <div className="flex items-center h-full">
        <HeaderDesktop />
      </div>
    </header>
  );
}
