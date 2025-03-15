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
      className="grid gap-4 md:grid-cols-2 grid-cols-1 !mb-6"
    >
      <div
        className={cn(
          "border border-dark dark:border-light rounded-md w-full shadow-md overflow-hidden self-start",
          className
        )}
      >
        <div className="w-full h-16 bg-dark dark:bg-light rounded-t-md flex items-center gap-2 px-2.5">
          <div className="rounded-md p-2.5 bg-bluesky-500 text-light">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex w-full rounded-md bg-light dark:bg-dark px-2 py-1.5 border">
            {title}
          </div>
        </div>
        <div className="w-full py-2.5 px-5">{children}</div>
      </div>
      <div className="relative pb-5">
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
              className="!rounded-xl "
              defaultLanguage="javascript"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
