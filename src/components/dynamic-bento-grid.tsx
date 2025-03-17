// components/dynamic-bento-grid.tsx
"use client";

import { useEffect, useState } from "react";
import { CardWrapper, CardType } from "./card-wrapper";

// Define your card components (import your actual components)
import { BackgroundCard } from "./background-card";
import { ArticleCard } from "./article-card";
import { SimpleCard } from "./simple-card";

interface DynamicBentoGridProps {
  data: any[]; // Your data array
  columns?: number;
  gap?: number;
}

export default function DynamicBentoGrid({
  data,
  columns = 3,
  gap = 4,
}: DynamicBentoGridProps) {
  // State to store the generated layout pattern
  const [layoutPattern, setLayoutPattern] = useState<CardType[]>([]);
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Generate a layout pattern when data changes
  useEffect(() => {
    if (!data || data.length === 0) return;

    // Calculate how many cards of each type based on total items
    const totalItems = data.length;

    // Default distribution (can be adjusted to your preference)
    const backgroundCount = Math.max(1, Math.floor(totalItems * 0.15)); // ~15% background cards
    const articleCount = Math.max(1, Math.floor(totalItems * 0.25)); // ~25% article cards
    const verticalCount = Math.max(1, Math.floor(totalItems * 0.15)); // ~15% vertical cards
    const simpleCount =
      totalItems - backgroundCount - articleCount - verticalCount; // remaining are simple cards

    // Create a pattern array to store our layout
    let pattern: CardType[] = [];

    // Randomly choose a pattern style (0, 1, or 2)
    const patternStyle = Math.floor(Math.random() * 3);

    if (patternStyle === 0) {
      // Pattern Style 0: Background cards first
      // This puts the large cards at the beginning for a top-heavy layout
      pattern = [
        ...Array(backgroundCount).fill("card-background" as CardType),
        ...Array(verticalCount).fill("vertical-background" as CardType),
        ...Array(articleCount).fill("card-article" as CardType),
        ...Array(simpleCount).fill("simple-card" as CardType),
      ];
    } else if (patternStyle === 1) {
      // Pattern Style 1: Balanced distribution
      // This distributes different card types evenly throughout the grid

      // Divide the grid into chunks of ~10 cards for better distribution
      const chunks = Math.ceil(totalItems / 10);

      for (let i = 0; i < chunks; i++) {
        // Calculate how many of each card type to put in this chunk
        const backgroundPerChunk =
          Math.floor(backgroundCount / chunks) +
          (i < backgroundCount % chunks ? 1 : 0);
        const articlePerChunk =
          Math.floor(articleCount / chunks) +
          (i < articleCount % chunks ? 1 : 0);
        const verticalPerChunk =
          Math.floor(verticalCount / chunks) +
          (i < verticalCount % chunks ? 1 : 0);
        const simplePerChunk =
          Math.floor(simpleCount / chunks) + (i < simpleCount % chunks ? 1 : 0);

        // Create a mini-pattern for this chunk
        const chunkPattern = [
          // Start with background cards
          ...(backgroundPerChunk > 0
            ? Array(backgroundPerChunk).fill("card-background" as CardType)
            : []),
          // Add some simple cards
          ...(simplePerChunk > 0
            ? Array(Math.ceil(simplePerChunk / 2)).fill(
                "simple-card" as CardType
              )
            : []),
          // Add article cards
          ...(articlePerChunk > 0
            ? Array(articlePerChunk).fill("card-article" as CardType)
            : []),
          // Add vertical background cards
          ...(verticalPerChunk > 0
            ? Array(verticalPerChunk).fill("vertical-background" as CardType)
            : []),
          // Add remaining simple cards
          ...(simplePerChunk > 0
            ? Array(Math.floor(simplePerChunk / 2)).fill(
                "simple-card" as CardType
              )
            : []),
        ];

        // Add this chunk's pattern to the overall pattern
        pattern = [...pattern, ...chunkPattern];
      }
    } else {
      // Pattern Style 2: Background cards at end
      // This puts the large cards at the end for a bottom-heavy layout
      pattern = [
        ...Array(simpleCount).fill("simple-card" as CardType),
        ...Array(articleCount).fill("card-article" as CardType),
        ...Array(verticalCount).fill("vertical-background" as CardType),
        ...Array(backgroundCount).fill("card-background" as CardType),
      ];
    }

    // Make sure we don't have more pattern entries than data items
    setLayoutPattern(pattern.slice(0, totalItems));
  }, [data]); // Re-run when data changes

  // This function renders the appropriate component based on the card type
  const renderCard = (item: any, type: CardType) => {
    switch (type) {
      case "card-background":
        return <BackgroundCard {...item} />;
      case "vertical-background":
        return <BackgroundCard {...item} isVertical={true} />;
      case "card-article":
        return <ArticleCard {...item} />;
      case "simple-card":
      default:
        return <SimpleCard {...item} />;
    }
  };

  // Show loading state if we don't have data or pattern yet
  if (!data || data.length === 0 || layoutPattern.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div
        className={`grid gap-${gap}`}
        style={{
          // Use CSS Grid with 3 columns by default, or 1 column on mobile
          gridTemplateColumns: isMobile ? "1fr" : `repeat(${columns}, 1fr)`,
          gridAutoRows: "minmax(200px, auto)", // Set a minimum row height
        }}
      >
        {data.map((item, index) => (
          <CardWrapper
            key={index}
            type={layoutPattern[index] || "simple-card"}
            index={index}
          >
            {/* Render the appropriate card component based on the layout pattern */}
            {renderCard(item, layoutPattern[index] || "simple-card")}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}
