import { ReactNode } from 'react';

interface IContainerProps {
  id?: string;
  style?: object;
  size?: string;
  className?: string;
  children: ReactNode;
}

function Container({ id, style, size, className, children }: IContainerProps) {
  const options: any = {
    fluid: 'max-w-none',
    sm: 'max-w-sm',
    base: 'max-w-base',
    xs: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  };

  return (
    <div
      id={id}
      style={style}
      className={`container mx-auto px-4 md:px-8 lg:px-16 ${size ? `${options[size]}` : `${options["fluid"]}`} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
