"use client";
import * as React from "react";
import { Home, Monitor, RotateCw, Smartphone, Tablet } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { cn } from "@/lib/utils";

export const Frame = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={cn("border rounded-md shadow-md overflow-hidden", className)}
    >
      <div className="flex items-center justify-between bg-blklight-400 px-4 py-2 border-b">
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
      </div>
      <div className="w-full px-2 pb-2 min-h-svh overflow-y-auto scroll-smooth">
        {children}
      </div>
    </section>
  );
};
