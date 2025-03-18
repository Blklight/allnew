"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useInView } from "./use-scroll-animation";

interface BentoGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}

export default function BentoGrid({
  children,
  columns = 3,
  gap = 4,
}: BentoGridProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8"
  >
    <div
      className={`grid gap-${gap}`}
      style={{
        gridTemplateColumns: isMobile ? "1fr" : `repeat(${columns}, 1fr)`,
        gridAutoRows: "minmax(200px, auto)",
      }}
    >
      {children}
    </div>
  </motion.div>;
}
