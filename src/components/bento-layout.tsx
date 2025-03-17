"use client";

import React from "react";
import { CardWrapper } from "./card-wrapper";

interface BentoLayoutProps {
  children: React.ReactNode[];
  pattern?:
    | "balanced"
    | "background-first"
    | "background-middle"
    | "background-last"
    | "custom";
  customPattern?: (
    | "card-background"
    | "card-article"
    | "simple-card"
    | "vertical-background"
  )[];
}

export function BentoLayout({
  children,
  pattern = "balanced",
  customPattern,
}: BentoLayoutProps) {
  // Make sure we have an array of children
  const cards = React.Children.toArray(children);

  // Generate a layout pattern based on the number of cards
  const generatePattern = () => {
    // If custom pattern is provided, use it
    if (pattern === "custom" && customPattern) {
      return customPattern;
    }

    // Calculate how many cards of each type based on total cards
    const totalCards = cards.length;

    // Default distribution (can be adjusted)
    let backgroundCount = Math.max(1, Math.floor(totalCards * 0.15)); // ~15% background
    let articleCount = Math.max(1, Math.floor(totalCards * 0.25)); // ~25% article
    let verticalCount = Math.max(1, Math.floor(totalCards * 0.15)); // ~15% vertical
    let simpleCount =
      totalCards - backgroundCount - articleCount - verticalCount;

    // Ensure we don't have negative simple cards
    if (simpleCount < 0) {
      // Reduce other types to make room for simple cards
      const deficit = Math.abs(simpleCount);
      const reductions = [
        { type: "vertical", count: verticalCount },
        { type: "article", count: articleCount },
        { type: "background", count: backgroundCount },
      ].sort((a, b) => b.count - a.count);

      let remaining = deficit;
      for (const { type, count } of reductions) {
        const reduce = Math.min(count - 1, remaining);
        if (type === "background") backgroundCount -= reduce;
        if (type === "article") articleCount -= reduce;
        if (type === "vertical") verticalCount -= reduce;
        remaining -= reduce;
        if (remaining <= 0) break;
      }

      simpleCount = totalCards - backgroundCount - articleCount - verticalCount;
    }

    // Create the pattern array
    let layoutPattern: (
      | "card-background"
      | "card-article"
      | "simple-card"
      | "vertical-background"
    )[] = [];

    // Different arrangements based on pattern type
    switch (pattern) {
      case "background-first":
        // Put background cards at the beginning
        layoutPattern = [
          ...Array(backgroundCount).fill("card-background"),
          ...Array(articleCount).fill("card-article"),
          ...Array(verticalCount).fill("vertical-background"),
          ...Array(simpleCount).fill("simple-card"),
        ];
        break;

      case "background-middle":
        // Put background cards in the middle
        layoutPattern = [
          ...Array(Math.floor(simpleCount / 2)).fill("simple-card"),
          ...Array(Math.floor(articleCount / 2)).fill("card-article"),
          ...Array(backgroundCount).fill("card-background"),
          ...Array(Math.ceil(articleCount / 2)).fill("card-article"),
          ...Array(verticalCount).fill("vertical-background"),
          ...Array(Math.ceil(simpleCount / 2)).fill("simple-card"),
        ];
        break;

      case "background-last":
        // Put background cards at the end
        layoutPattern = [
          ...Array(simpleCount).fill("simple-card"),
          ...Array(articleCount).fill("card-article"),
          ...Array(verticalCount).fill("vertical-background"),
          ...Array(backgroundCount).fill("card-background"),
        ];
        break;

      case "balanced":
      default:
        // Distribute cards evenly
        const chunks = Math.ceil(totalCards / 10);
        for (let i = 0; i < chunks; i++) {
          // For each chunk of ~10 cards, create a balanced pattern
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
            Math.floor(simpleCount / chunks) +
            (i < simpleCount % chunks ? 1 : 0);

          // Create a mini-pattern for this chunk
          const chunkPattern = [
            ...(backgroundPerChunk > 0 ? ["card-background"] : []),
            ...(simplePerChunk > 0 ? ["simple-card"] : []),
            ...(articlePerChunk > 0 ? ["card-article"] : []),
            ...(simplePerChunk > 1 ? ["simple-card"] : []),
            ...(verticalPerChunk > 0 ? ["vertical-background"] : []),
            ...(simplePerChunk > 2
              ? Array(simplePerChunk - 2).fill("simple-card")
              : []),
            ...(articlePerChunk > 1
              ? Array(articlePerChunk - 1).fill("card-article")
              : []),
            ...(backgroundPerChunk > 1
              ? Array(backgroundPerChunk - 1).fill("card-background")
              : []),
            ...(verticalPerChunk > 1
              ? Array(verticalPerChunk - 1).fill("vertical-background")
              : []),
          ];

          layoutPattern = [...layoutPattern, ...chunkPattern];
        }
        break;
    }

    return layoutPattern.slice(0, totalCards);
  };

  const layoutPattern = generatePattern();

  return (
    <>
      {cards.map((child, index) => (
        <CardWrapper
          key={index}
          type={layoutPattern[index] || "SimpleCard"}
          index={index}
        >
          {child}
        </CardWrapper>
      ))}
    </>
  );
}
