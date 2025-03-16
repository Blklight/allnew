"use client";

import * as React from "react";
import { useMobile } from "@/hooks/use-mobile";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface ResponsiveResizableProps {
  defaultSizes?: number[];
  children: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  className?: string;
}

export function ResponsiveResizable({
  defaultSizes = [25, 75],
  children,
  direction = "horizontal",
  className,
}: ResponsiveResizableProps) {
  const isMobile = useMobile();

  // If on mobile, render a simple container without resizable functionality
  if (isMobile) {
    return (
      <div
        className={`flex ${
          direction === "horizontal" ? "flex-col" : "flex-row"
        } w-full ${className}`}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full">
            {child}
          </div>
        ))}
      </div>
    );
  }

  // On desktop, use the Resizable component
  return (
    <ResizablePanelGroup direction={direction} className={className}>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          <ResizablePanel defaultSize={defaultSizes[index]}>
            {child}
          </ResizablePanel>
          {index < children.length - 1 && <ResizableHandle withHandle />}
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  );
}
