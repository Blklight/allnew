// src/components/editor/enhanced-text-editor.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import { cn } from "@/lib/utils";
import EditorToolbar from "./editor-toolbar";
import TypographySelector from "./typography-selector";
import TutorialBlock from "./tutorial-block-extension";
import FloatingToolbar from "./floating-toolbar";
import { Check } from "lucide-react";

import initialValue from "@/utils/tip-tap-initial.json";

// Create lowlight instance
const lowlight = createLowlight(common);

// Import languages for syntax highlighting
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";

// Register languages with lowlight
lowlight.register("javascript", javascript);
lowlight.register("typescript", typescript);
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("python", python);
lowlight.register("bash", bash);

// Import a highlight.js theme
import "highlight.js/styles/atom-one-dark.css";

// Simple debounce function
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

interface EnhancedTextEditorProps {
  initialContent?: string;
  onChange?: (html: string) => void;
  documentTitle?: string;
}

export default function EnhancedTextEditor({
  initialContent = "",
  onChange,
  documentTitle = "Untitled Document",
}: EnhancedTextEditorProps) {
  const [typography, setTypography] = useState<string>("inter");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [content, setContent] = useState(initialContent);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // Disable the default code block
      }),
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
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "javascript",
        HTMLAttributes: {
          class:
            "rounded-md bg-slate-950 dark:bg-slate-900 p-4 my-4 overflow-x-auto",
        },
      }),
    ],
    // content:
    //   initialContent ||
    //   `
    //   <h1>Start writing...</h1>
    //   <p>This is a rich text editor with a vertical toolbar.</p>
    // `,
    content: initialValue,
    editorProps: {
      attributes: {
        class:
          "prose prose-lg dark:prose-invert focus:outline-none max-w-full mx-auto px-8 py-16 min-h-[500px]",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      onChange?.(html);

      // Trigger auto-save when content changes
      triggerAutoSave(html);
    },
  });

  // Create a debounced save function (1.5 seconds after typing stops)
  const triggerAutoSave = useRef(
    debounce((html: string) => {
      saveDocument(html);
    }, 1500)
  ).current;

  // Simulate saving the document
  const saveDocument = async (html: string) => {
    if (isSaving) return;

    setIsSaving(true);

    try {
      // Simulate an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In a real app, you would save to your backend here
      // await fetch('/api/documents', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title: documentTitle, content: html }),
      // });

      // Update last saved time
      const now = new Date();
      setLastSaved(now);

      // Show saved status for 2 seconds
      setTimeout(() => {
        // You could reset a "just saved" state here if you want
        // For now we'll just keep the lastSaved timestamp
      }, 2000);
    } catch (error) {
      console.error("Failed to save:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {/* Header with title and save status */}
      <div className="flex items-center justify-between">
        {/* <div>
          <h2 className="text-2xl font-bold">{documentTitle}</h2>
        </div> */}
      </div>

      {/* Editor */}
      <div className="relative rounded-md overflow-hidden">
        <div className="flex gap-4 items-stretch">
          {/* Vertical Toolbar */}
          <EditorToolbar editor={editor} />

          {/* Main Editor */}
          <div
            className={cn(
              "flex-1 min-h-[500px] border rounded-md relative bg-grey book:bg-sepia-medium dark:bg-black background-texture",
              typography === "inter" && "font-sans",
              typography === "barlow" && "font-barlow",
              typography === "jetbrains" && "font-mono",
              typography === "serif" && "font-serif"
            )}
          >
            {/* Typography Selector - Moved back to top-right corner */}
            <div className="absolute top-3 left-3 z-10">
              <TypographySelector value={typography} onChange={setTypography} />
            </div>

            <div className="absolute top-3 right-3 z-10">
              <div>
                {/* Save status indicator styled as a button */}
                <div
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors",
                    isSaving
                      ? "bg-bluesky-500 text-light dark:bg-amber-900/30 dark:text-amber-300"
                      : lastSaved
                      ? "bg-blklight-500 text-light dark:bg-green-900/30 dark:text-green-300"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  {isSaving ? (
                    <>
                      <div className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      <span>Salvando alterações...</span>
                    </>
                  ) : lastSaved ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Alterações salvas</span>
                    </>
                  ) : (
                    <span>Pronto para salvar</span>
                  )}
                </div>
              </div>
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
    </div>
  );
}
