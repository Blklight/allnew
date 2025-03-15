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

import TextEditor from "@/components/text-editor";

export default function Create() {
  const handleEditorChange = (content: string) => {
    console.log("Editor content changed:", content);
  };

  const router = useRouter();
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="">
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
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="texto">Conteúdo</Label>
            <Textarea
              id="texto"
              placeholder="Escreva seu texto aqui..."
              className="h-80"
            />
          </div>
          <div className="container py-10">
            <TextEditor
              onChange={handleEditorChange}
              initialContent="<h1>Hello World</h1><p>Start editing this document...</p>"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button size={"icon"} variant={"outline"}>
                <Code className="size-4" />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Plus className="size-4" />
              </Button>
            </div>
            <Button onClick={() => router.push("/preview")}>
              <Globe className="mr-2 size-4" />
              Publicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
