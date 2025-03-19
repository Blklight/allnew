"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Copy, Download, GraduationCap, Play } from "lucide-react";
import { Editor } from "@monaco-editor/react";

export const TutorialFrame = ({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id="tutorial-frame"
      className="flex lg:flex-row flex-col gap-4 !mb-6"
    >
      <div
        className={cn(
          "border flex-1 rounded-md shadow-md overflow-hidden",
          className
        )}
      >
        <div className="flex items-center justify-between bg-blklight-400 px-4 py-2 border-b">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/80 rounded-md px-3 py-1 text-sm text-center truncate">
              {title}
            </div>
          </div>
        </div>
        <div className="w-full py-2.5 px-5">{children}</div>
      </div>
      <div className="relative flex-1 pb-5 lg:block hidden">
        <div className="sticky top-0">
          <div className="py-2.5 flex gap-2 ">
            <Button type="button">
              <Play className="w-5 h-5" /> Testar
            </Button>
            <div className="ml-auto flex gap-2">
              <Button variant={"secondary"} type="button">
                {" "}
                <Copy className="w-4 h-4 " /> Copiar
              </Button>
              <Button variant={"secondary"} type="button">
                {" "}
                <Download className="w-4 h-4" /> Download{" "}
              </Button>
            </div>
          </div>
          <div className="!rounded-md min-h-[400px] h-[650px] max-h-svh overflow-hidden">
            <Editor
              theme="vs-dark"
              className="!rounded-md w-full h-full"
              defaultLanguage="javascript"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
