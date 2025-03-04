import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingElement = ({ children, className = "", delay = 0 }: FloatingElementProps) => (
  <motion.div
    className={`absolute ${className}`}
    style={{
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'subpixel-antialiased',
      transform: 'translate3d(0,0,0)'
    }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, -5, 5, 0],
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
      type: "tween",
      damping: 10,
      stiffness: 100
    }}
  >
    {children}
  </motion.div>
); 