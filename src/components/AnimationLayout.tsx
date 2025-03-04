import { LazyMotion, domAnimation, m } from 'framer-motion';
import React from 'react';

export const AnimationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

export { m }; 