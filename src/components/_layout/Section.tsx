import { ReactNode } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  size?: "clean" | "xs" | "sm" | "md" | "lg";
}

function Section({ id, className, style, children, size = "md" }: ISectionProps) {
  const sizes = {
    clean: "",
    xs: "py-8",
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-40"
  };

  return (
    <section id={id} className={`${className} ${sizes[size]} bg-white`} style={style}>
      {children}
    </section>
  )
}

export default Section;
