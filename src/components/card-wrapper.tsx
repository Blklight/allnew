// components/card-wrapper.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

// Define the possible card types and sizes
export type CardType = "BackgroundCard" | "ArticleCard" | "SimpleCard";
export type CardSize = "1x1" | "2x1" | "1x2" | "2x2";

interface CardWrapperProps {
  children: ReactNode;
  type: CardType;
  size: CardSize;
  index: number;
  className?: string;
}

export function CardWrapper({
  children,
  type,
  size,
  index,
  className = "",
}: CardWrapperProps) {
  // Define grid classes based on size
  let gridClasses = "";

  // This switch statement determines how much space each card takes in the grid
  switch (size) {
    case "2x2":
      gridClasses = "col-span-2 row-span-2"; // 2 columns and 2 rows
      break;
    case "2x1":
      gridClasses = "col-span-2 row-span-1"; // 2 columns and 1 row
      break;
    case "1x2":
      gridClasses = "col-span-1 row-span-2"; // 1 column and 2 rows
      break;
    case "1x1":
    default:
      gridClasses = "col-span-1 row-span-1"; // 1 column and 1 row
      break;
  }

  // Animation variants for the cards
  const cardVariants = {
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
    // hover: {
    //   y: -8,
    //   // boxShadow:
    //   //   "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    //   transition: {
    //     duration: 0.2,
    //     ease: "easeOut",
    //   },
    // },
  };

  return (
    <motion.div
      className={`${gridClasses} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
    >
      {children}
    </motion.div>
  );
}
