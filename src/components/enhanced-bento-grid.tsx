// components/enhanced-bento-grid.tsx
"use client";

import { useEffect, useState } from "react";
import { CardWrapper, CardType, CardSize } from "./card-wrapper";

// Import your card components
import { BackgroundCard } from "./background-card";
import { ArticleCard } from "./article-card";
import { SimpleCard } from "./simple-card";

interface EnhancedBentoGridProps {
  data: any[]; // Your data array
  preferredColumns?: number;
  maxColumns?: number;
  gap?: number;
  allowImperfectHeight?: boolean;
}

export default function EnhancedBentoGrid({
  data,
  preferredColumns = 3,
  maxColumns = 4,
  gap = 4,
  allowImperfectHeight = true,
}: EnhancedBentoGridProps) {
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  // State to track current column count
  const [columnCount, setColumnCount] = useState(preferredColumns);
  // State to store processed data with sizes
  const [processedData, setProcessedData] = useState<any[]>([]);

  // Check for mobile viewport and set column count
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        // Mobile: 1 column
        setIsMobile(true);
        setColumnCount(1);
      } else if (width < 1024) {
        // Tablet: preferred columns or 2, whichever is smaller
        setIsMobile(false);
        setColumnCount(Math.min(preferredColumns, 2));
      } else {
        // Desktop: use preferred columns
        setIsMobile(false);

        // Determine if we should use max columns based on data length
        const useMaxColumns = data.length > 12 && maxColumns > preferredColumns;

        setColumnCount(useMaxColumns ? maxColumns : preferredColumns);
      }
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, [data.length, maxColumns, preferredColumns]);

  // Process data and determine sizes
  useEffect(() => {
    if (!data || data.length === 0) return;

    // Create a copy of the data to work with
    const dataWithSizes = data.map((item) => ({
      ...item,
      // Determine the card type (use the one from data or infer it)
      cardType: determineCardType(item),
      // We'll determine the size later
      _assignedSize: null,
    }));

    // Assign sizes based on content and create a balanced layout
    const processedItems = assignSizesToItems(dataWithSizes, columnCount);

    setProcessedData(processedItems);
  }, [data, columnCount]);

  // Function to determine the card type based on item content
  const determineCardType = (item: any): CardType => {
    // If the item already has a cardType, use it
    if (item.document.stylesheet.cardLayout)
      return item.document.stylesheet.cardLayout as CardType;

    // Otherwise, infer the card type based on content
    if (item.backgroundImage) {
      return "BackgroundCard";
    } else if (item.image) {
      return "ArticleCard";
    } else {
      return "SimpleCard";
    }
  };

  // Function to determine the appropriate size for a card based on its content
  const determineCardSize = (item: any, cardType: CardType): CardSize => {
    // If the card is a background card
    if (cardType === "BackgroundCard") {
      // Check content length to determine if it should be large
      const hasLongContent = item.content && item.content.length > 100;
      const isImportant = item.isImportant || item.isFeatured;

      if (isImportant || hasLongContent) {
        return "2x2"; // Large background card
      } else {
        // Randomly choose between vertical and horizontal for variety
        return Math.random() > 0.5 ? "2x1" : "1x2";
      }
    }

    // If the card is an article card
    else if (cardType === "ArticleCard") {
      // Check content length to determine if it should be wide or tall
      const hasLongContent = item.content && item.content.length > 150;

      if (hasLongContent) {
        return "2x1"; // Wide article card for longer content
      } else {
        // Randomly choose between standard and tall for variety
        return Math.random() > 0.7 ? "1x2" : "1x1";
      }
    }

    // If the card is a simple card
    else {
      // Check content length to determine if it should be larger
      const hasLongContent = item.content && item.content.length > 200;

      if (hasLongContent) {
        // Randomly choose between wide and tall for variety
        return Math.random() > 0.5 ? "2x1" : "1x2";
      } else {
        return "1x1"; // Standard simple card
      }
    }
  };

  // Function to assign sizes to items and create a balanced layout
  const assignSizesToItems = (items: any[], columns: number) => {
    // Create a copy of the items
    const processedItems = [...items];

    // First pass: assign initial sizes based on content
    processedItems.forEach((item) => {
      item._assignedSize = determineCardSize(item, item.cardType);
    });

    // Second pass: balance the layout based on column count
    if (columns === 3) {
      // For 3-column layout, we need to be careful with card placement

      // Count how many of each size we have
      let twoByTwoCount = processedItems.filter(
        (item) => item._assignedSize === "2x2"
      ).length;
      let twoByOneCount = processedItems.filter(
        (item) => item._assignedSize === "2x1"
      ).length;
      let oneByTwoCount = processedItems.filter(
        (item) => item._assignedSize === "1x2"
      ).length;
      let oneByOneCount = processedItems.filter(
        (item) => item._assignedSize === "1x1"
      ).length;

      // Calculate total columns used
      const totalColumnsUsed =
        twoByTwoCount * 2 + twoByOneCount * 2 + oneByTwoCount + oneByOneCount;

      // Calculate how many rows we'll have (approximately)
      const approximateRows = Math.ceil(totalColumnsUsed / columns);

      // Adjust sizes to create a more balanced layout

      // If we have too many 2x2 cards, convert some to 2x1 or 1x2
      if (twoByTwoCount > approximateRows / 3) {
        processedItems.forEach((item) => {
          if (
            item._assignedSize === "2x2" &&
            twoByTwoCount > approximateRows / 3
          ) {
            item._assignedSize = Math.random() > 0.5 ? "2x1" : "1x2";
            twoByTwoCount--;
            if (item._assignedSize === "2x1") twoByOneCount++;
            else oneByTwoCount++;
          }
        });
      }

      // If we have too many 2x1 cards, convert some to 1x1
      if (twoByOneCount > approximateRows / 2) {
        processedItems.forEach((item) => {
          if (
            item._assignedSize === "2x1" &&
            twoByOneCount > approximateRows / 2
          ) {
            item._assignedSize = "1x1";
            twoByOneCount--;
            oneByOneCount++;
          }
        });
      }

      // Sort items to create a better flow
      // This puts larger cards first, followed by smaller ones
      processedItems.sort((a, b) => {
        const sizeValues = { "2x2": 4, "2x1": 3, "1x2": 2, "1x1": 1 };
        return (
          sizeValues[b._assignedSize as CardSize] -
          sizeValues[a._assignedSize as CardSize]
        );
      });

      // Reorder to create a balanced layout
      // This algorithm tries to ensure we don't have awkward gaps
      const result: any[] = [];

      // Track column usage for each row
      let currentRow = 0;
      let columnsUsedInCurrentRow = 0;

      // Helper function to check if an item fits in the current row
      const itemFitsInCurrentRow = (size: CardSize) => {
        const columnsNeeded = size === "2x2" || size === "2x1" ? 2 : 1;
        return columnsUsedInCurrentRow + columnsNeeded <= columns;
      };

      // Process 2x2 cards first
      const twoByTwoItems = processedItems.filter(
        (item) => item._assignedSize === "2x2"
      );
      const otherItems = processedItems.filter(
        (item) => item._assignedSize !== "2x2"
      );

      // Place 2x2 cards strategically
      twoByTwoItems.forEach((item) => {
        // If this item doesn't fit in the current row, move to the next row
        if (!itemFitsInCurrentRow("2x2")) {
          currentRow++;
          columnsUsedInCurrentRow = 0;
        }

        result.push(item);
        columnsUsedInCurrentRow += 2;
      });

      // Now place the rest of the items
      otherItems.forEach((item) => {
        const size = item._assignedSize as CardSize;
        const columnsNeeded = size === "2x1" ? 2 : 1;

        // If this item doesn't fit in the current row, move to the next row
        if (!itemFitsInCurrentRow(size)) {
          currentRow++;
          columnsUsedInCurrentRow = 0;
        }

        result.push(item);
        columnsUsedInCurrentRow += columnsNeeded;
      });

      return result;
    }

    return processedItems;
  };

  // This function renders the appropriate component based on the card type
  const renderCard = (item: any) => {
    // Get the card type from the data or default to SimpleCard
    const cardType = item.cardType || "SimpleCard";

    switch (cardType) {
      case "BackgroundCard":
        return (
          <BackgroundCard data={item.document} authors={item.authordetails} />
        );
      case "ArticleCard":
        return (
          <ArticleCard data={item.document} authors={item.authordetails} />
        );
      case "SimpleCard":
      default:
        return <SimpleCard data={item.document} authors={item.authordetails} />;
    }
  };

  // Show loading state if we don't have data or processed data yet
  if (!data || data.length === 0 || processedData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto my-2.5">
      <div
        className={`grid gap-${gap} grid-cols-1 md:grid-cols-${columnCount}`}
        style={{
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          // If we allow imperfect height, use auto-flow dense to fill gaps
          gridAutoFlow: allowImperfectHeight ? "dense" : "row",
          // Set a minimum row height but allow for variable heights
          gridAutoRows: allowImperfectHeight ? "auto" : "minmax(200px, auto)",
        }}
      >
        {processedData.map((item, index) => (
          <CardWrapper
            key={item.id || index}
            type={item.cardType}
            size={isMobile ? "1x1" : item._assignedSize}
            index={index}
          >
            {renderCard(item)}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}
