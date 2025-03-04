import { ReactNode } from 'react';
import { m, animations, defaultViewport, defaultTransition } from './animations/motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: keyof typeof animations;
}

export const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = 'fadeUp'
}: ScrollRevealProps) => {
  return (
    <m.div
      {...animations[animation]}
      viewport={defaultViewport}
      transition={{
        ...defaultTransition,
        delay
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}; 