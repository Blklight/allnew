// animation-variants.ts

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow:
      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Special variants for background cards
export const backgroundCardVariants = {
  ...cardVariants,
  hover: {
    ...cardVariants.hover,
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  },
};

// Special variants for article cards
export const articleCardVariants = {
  ...cardVariants,
  hover: {
    ...cardVariants.hover,
    y: -8,
    transition: {
      duration: 0.25,
    },
  },
};

// Image animation for article cards
export const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
    },
  },
};
