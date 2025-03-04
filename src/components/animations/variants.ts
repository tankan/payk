export const fadeInUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
      mass: 0.5,
      restDelta: 0.001
    }
  }
};

export const containerVariants = {
  hidden: { 
    opacity: 1,
    height: "auto"
  },
  visible: { 
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItemVariants = {
  hidden: { 
    opacity: 0,
    y: 10,
    scale: 0.98,
    height: "auto"
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    height: "auto",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 200,
      mass: 0.5,
      restDelta: 0.001
    }
  }
};

export const commonTransition = {
  type: "spring",
  damping: 30,
  stiffness: 200,
  mass: 0.5,
  restDelta: 0.001
}; 