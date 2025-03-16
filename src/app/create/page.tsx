"use client";
import { IconSidebar } from "@/components/icon-sidebar";
import { NavToolbar } from "@/components/nav-toolbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CalendarClock, Code, Globe, Plus, Router } from "lucide-react";
import { useRouter } from "next/navigation";

// import TextEditor from "@/components/text-editor";
import EnhancedTextEditor from "@/components/enhanced-text-editor";
import { Toaster } from "sonner";
import { Separator } from "@/components/ui/separator";
import { defaultEditorValue } from "@/components/dev-tools";

export default function Create() {
  const handleEditorChange = (content: string) => {
    console.log("Editor content changed:", content);
  };

  const router = useRouter();
  return (
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Criar tutorial</h1>
        <div className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="titulo">Titulo</Label>
            <Input type="titulo" id="titulo" placeholder="Titulo" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea id="descricao" placeholder="Descrição" />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <p>Imagem</p>
            <Skeleton className="w-full h-24 !bg-dark-100 dark:!bg-muted" />
          </div>
        </div>
      </div>
      <div className="container py-10">
        {/* <TextEditor
              onChange={handleEditorChange}
              initialContent="<h1>Hello World</h1><p>Start editing this document...</p>"
            /> */}
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[24px] font-bold">Contéudo</h4>
          <Button size={"lg"} onClick={() => router.push("/preview")}>
            <Globe className="mr-2 size-4" />
            Publicar tutorial
          </Button>
        </div>
        <Separator />
        <EnhancedTextEditor
          documentTitle="Conteúdo"
          onChange={handleEditorChange}
          initialContent={defaultEditorValue}
        />
        <Toaster />
      </div>
    </div>
  );
}
