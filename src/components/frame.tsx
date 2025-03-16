"use client";
import * as React from "react";
import {
  Home,
  Maximize2,
  Minimize2,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { cn } from "@/lib/utils";

import {
  ReactNodeViewRenderer,
  NodeViewWrapper,
  NodeViewContent,
} from "@tiptap/react";

export const Frame = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  return (
    <div
      className={cn(
        "border rounded-md shadow-md overflow-hidden",
        isFullscreen ? "fixed inset-2 z-50 bg-background" : "relative",
        className
      )}
    >
      <div className="flex items-center justify-between bg-blklight-400 px-4 py-2 border-b rounded-t-md">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-background/80 rounded-md px-3 py-1 text-sm text-center truncate">
            {text}
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      <div className="w-full px-2 p-5 h-full overflow-y-auto scroll-smooth">
        {children}
      </div>
    </div>
  );
};
