// components/card-wrapper.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the possible card types
export type CardType =
  | "card-background"
  | "card-article"
  | "simple-card"
  | "vertical-background";

interface CardWrapperProps {
  children: ReactNode;
  type: CardType;
  index: number;
  className?: string;
}

export function CardWrapper({
  children,
  type,
  index,
  className = "",
}: CardWrapperProps) {
  // Define grid classes based on card type
  let gridClasses = "";

  // This switch statement determines how much space each card type takes in the grid
  switch (type) {
    case "card-background":
      // Background cards take up 2 columns and 2 rows (large square)
      gridClasses = "col-span-2 row-span-2";
      break;
    case "card-article":
      // Article cards take up 2 columns and 1 row (wide rectangle)
      gridClasses = "col-span-2 row-span-1";
      break;
    case "vertical-background":
      // Vertical background cards take up 1 column and 2 rows (tall rectangle)
      gridClasses = "col-span-1 row-span-2";
      break;
    case "simple-card":
    default:
      // Simple cards take up 1 column and 1 row (small square)
      gridClasses = "col-span-1 row-span-1";
      break;
  }

  // Animation variants for the cards
  const cardVariants = {
    // Initial state (hidden)
    hidden: {
      opacity: 0,
      y: 20,
    },
    // Visible state with staggered delay based on index
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger the animations by 0.1s per card
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // Smooth easing function
      },
    }),
    // Hover state for interactive feedback
    hover: {
      y: -5,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${gridClasses} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Animate when the card comes into view
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }} // Only animate once when it enters the viewport
      custom={index} // Pass the index to the animation for staggered timing
    >
      {children}
    </motion.div>
  );
}
