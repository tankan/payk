import { m } from 'framer-motion';

export const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
};

export const animations = {
  fadeUp: {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: defaultTransition
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: defaultTransition
  }
};

export const defaultViewport = {
  once: true,
  margin: "-100px"
};

export { m }; 