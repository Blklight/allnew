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
      className={cn(
        "border rounded-xl w-full shadow-md overflow-hidden ",
        className
      )}
    >
      <div className="w-full h-14 bg-slate-100 dark:bg-slate-900 rounded-t-xl flex items-center gap-2 px-2">
        <Button variant={"secondary"} size={"icon"} className="px-2">
          {/* <RotateCw className="w-5 h-5" /> */}
          <Home className="w-5 h-5" />
        </Button>
        <Input
          disabled
          defaultValue={text}
          className="!bg-white !text-black dark:!bg-black dark:!text-white !opacity-100"
        />
        {/* <div className="">
          <ToggleGroup
            type="single"
            size={"sm"}
            className="gap-2"
            variant={"default"}
          >
            <ToggleGroupItem
              value="100"
              title="Desktop"
              className="!rounded !border "
            >
              <Monitor className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              title="Tablet"
              className="!rounded !border "
            >
              <Tablet className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              title="Mobile"
              className="!rounded !border "
            >
              <Smartphone className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div> */}
      </div>
      <div className="w-full px-2 pb-2 min-h-svh overflow-y-auto scroll-smooth">
        {children}
      </div>
    </section>
  );
};
