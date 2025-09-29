import React from "react";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

function SectionHeader({ className, kicker, title, description, align = "center", children }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`${alignClass} ${className} mb-10 lg:mb-20 mx-auto`}>
      {kicker && <span>{kicker}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}

export default SectionHeader
