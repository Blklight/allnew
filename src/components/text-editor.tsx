// src/components/editor/text-editor.tsx
"use client";

import { useState } from "react";
import { useEditor, EditorContent, BubbleMenu, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { cn } from "@/lib/utils";
import EditorToolbar from "./editor-toolbar";
import TypographySelector from "./typography-selector";
import TutorialBlock from "./tutorial-block-extension";
import FloatingToolbar from "./floating-toolbar";

interface TextEditorProps {
  initialContent?: string;
  onChange?: (html: string) => void;
}

export default function TextEditor({
  initialContent = "",
  onChange,
}: TextEditorProps) {
  const [typography, setTypography] = useState<string>("inter");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing...",
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline underline-offset-4",
        },
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: "rounded-md mx-auto",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      TutorialBlock,
    ],
    content:
      initialContent ||
      `
      <h1>Start writing...</h1>
      <p>This is a rich text editor with a vertical toolbar.</p>
    `,
    editorProps: {
      attributes: {
        class:
          "prose prose-lg dark:prose-invert focus:outline-none max-w-full mx-auto p-6 min-h-[500px]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="relative border rounded-md shadow-sm overflow-hidden">
      <div className="flex items-stretch">
        {/* Vertical Toolbar */}
        <EditorToolbar editor={editor} />

        {/* Main Editor */}
        <div
          className={cn(
            "flex-1 min-h-[500px] relative bg-transparent",
            typography === "inter" && "font-sans",
            typography === "barlow" && "font-barlow",
            typography === "jetbrains" && "font-mono",
            typography === "serif" && "font-serif"
          )}
        >
          {/* Typography Selector */}
          <div className="absolute top-3 right-3 z-10">
            <TypographySelector value={typography} onChange={setTypography} />
          </div>

          {/* Editor Content */}
          <EditorContent editor={editor} className="h-full" />

          {/* Floating Menu */}
          {editor && (
            <BubbleMenu
              editor={editor}
              tippyOptions={{ duration: 100 }}
              className="bg-background rounded-md shadow-md border overflow-hidden flex"
            >
              <FloatingToolbar editor={editor} />
            </BubbleMenu>
          )}
        </div>
      </div>
    </div>
  );
}
