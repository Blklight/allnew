// src/components/editor/tutorial-block-extension.tsx
"use client";

import { cn } from "@/lib/utils";
import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { useState } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X } from "lucide-react";

// Define the Tutorial Block extension
const TutorialBlock = Node.create({
  name: "tutorialBlock",
  group: "block",
  content: "block+",
  defining: true,

  addCommands() {
    return {
      // ...this.parent?.(),
      setTutorialBlock:
        () =>
        ({ commands }: any) => {
          return commands.insertContent({
            type: this.name,
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "This is a tutorial block. You can add content here.",
                  },
                ],
              },
            ],
          });
        },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="tutorial-block"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "tutorial-block" }),
      0,
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(TutorialBlockView);
  },
});

// React component for rendering the tutorial block
function TutorialBlockView(props: any) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <NodeViewWrapper
      className={cn(
        "tutorial-block my-8 not-prose",
        isFullscreen ? "fixed inset-0 z-50 bg-background p-6" : "relative"
      )}
    >
      <div className="border rounded-lg shadow-md overflow-hidden">
        {/* Browser-like header */}
        <div className="flex items-center justify-between bg-blklight-400 px-4 py-2 border-b">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-center truncate">
              example.com/tutorial
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
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => props.deleteNode()}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content area */}
        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="preview" className="p-4 min-h-[200px]">
            <div className="tutorial-content">
              {/* Safe way to render the content DOM */}
              <div ref={props.contentRef}></div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="border-t">
            <div className="bg-muted/50 p-4 font-mono text-sm overflow-auto min-h-[200px]">
              <pre className="text-xs">
                {`// This is a simulated code editor
import React from 'react';

function TutorialExample() {
  return (
    <div className="example">
      <h2>Hello World</h2>
      <p>This is a tutorial example</p>
    </div>
  );
}

export default TutorialExample;`}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </NodeViewWrapper>
  );
}

export default TutorialBlock;
