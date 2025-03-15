// src/components/editor/editor-toolbar.tsx
"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import type { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  Code,
  Laptop,
  Heading1,
  LinkIcon,
  ImageIcon,
  Strikethrough,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EditorToolbarProps {
  editor: Editor | null;
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return null;
  }

  const addTutorialBlock = () => {
    editor.chain().focus().setTutorialBlock().run();
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col py-4 px-2 border-r h-full min-h-[500px] bg-slate-50 dark:bg-slate-900 w-16">
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
          tooltip="Heading"
        >
          <Heading1 className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          tooltip="Bold"
        >
          <Bold className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          tooltip="Italic"
        >
          <Italic className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          tooltip="Underline"
        >
          <Underline className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          tooltip="Strikethrough"
        >
          <Strikethrough className="h-5 w-5" />
        </ToolbarButton>

        <div className="my-2 border-t border-slate-200 dark:border-slate-700 w-8 mx-auto"></div>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          tooltip="Bullet List"
        >
          <List className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          tooltip="Ordered List"
        >
          <ListOrdered className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          tooltip="Quote"
        >
          <Quote className="h-5 w-5" />
        </ToolbarButton>

        <div className="my-2 border-t border-slate-200 dark:border-slate-700 w-8 mx-auto"></div>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
          tooltip="Align Left"
        >
          <AlignLeft className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
          tooltip="Align Center"
        >
          <AlignCenter className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
          tooltip="Align Right"
        >
          <AlignRight className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          active={editor.isActive({ textAlign: "justify" })}
          tooltip="Justify"
        >
          <AlignJustify className="h-5 w-5" />
        </ToolbarButton>

        <div className="my-2 border-t border-slate-200 dark:border-slate-700 w-8 mx-auto"></div>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          active={editor.isActive("codeBlock")}
          tooltip="Code Block"
        >
          <Code className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={addTutorialBlock}
          active={editor.isActive("tutorialBlock")}
          tooltip="Tutorial Block"
        >
          <Laptop className="h-5 w-5" />
        </ToolbarButton>

        <div className="my-2 border-t border-slate-200 dark:border-slate-700 w-8 mx-auto"></div>

        <ToolbarButton
          onClick={() => {
            const url = window.prompt("Enter image URL");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          tooltip="Add Image"
        >
          <ImageIcon className="h-5 w-5" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => {
            const url = window.prompt("Enter link URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          active={editor.isActive("link")}
          tooltip="Add Link"
        >
          <LinkIcon className="h-5 w-5" />
        </ToolbarButton>
      </div>
    </TooltipProvider>
  );
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  tooltip: string;
}

function ToolbarButton({
  onClick,
  active,
  children,
  tooltip,
}: ToolbarButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          className={cn(
            "h-10 w-10 rounded-md mb-1 flex items-center justify-center",
            active
              ? "bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          )}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
