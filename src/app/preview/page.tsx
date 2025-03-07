"use client";

import * as React from "react";
import Image from "next/image";

import ComponentMultipleSelector from "@/components/comp-234";
import { Frame } from "@/components/frame";
import { IconSidebar } from "@/components/icon-sidebar";
import { NavToolbar } from "@/components/nav-toolbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Categoring } from "@/components/categories";
import { Styling } from "@/components/styling";
import { Scheduler } from "@/components/scheduler";
import { Button } from "@/components/ui/button";
import { Globe, Route } from "lucide-react";
import { SelectPathsDialog } from "@/components/select-path";
import { learningPaths } from "@/components/dev-tools";
import type { Article } from "@/lib/types";

export default function Preview() {
  const [isSelectPathsOpen, setIsSelectPathsOpen] = React.useState(false);
  const [currentArticle, setCurrentArticle] = React.useState<Article | null>(
    null
  );

  const tutorial = {
    id: 1,
    title: "Criando um Componente no React",
    description: "Aprenda a criar um componente funcional no React com hooks.",
    image: "/example-img.jpg",
    category: "Desenvolvimento Web / Front-end",
    difficulty: "Iniciante",
    steps: [
      {
        title: "Criando o Projeto",
        content: "Para começar, crie um novo projeto React com o comando:",
        code: "npx create-react-app meu-app\ncd meu-app\nnpm start",
      },
      {
        title: "Criando o Componente",
        content:
          "Agora, crie um arquivo `Button.jsx` dentro da pasta `src/components/` e adicione o seguinte código:",
        code: 'import React from "react";\n\nconst Button = ({ label }) => {\n  return <button>{label}</button>;\n};\n\nexport default Button;',
      },
      {
        title: "Utilizando o Componente",
        content: "No arquivo `App.jsx`, importe e utilize o componente:",
        code: 'import React from "react";\nimport Button from "./components/Button";\n\nfunction App() {\n  return (\n    <div>\n      <h1>Meu App</h1>\n      <Button label="Clique aqui" />\n    </div>\n  );\n}\n\nexport default App;',
      },
      {
        title: "Executando o Projeto",
        content: "Agora, execute o projeto com:",
        code: "npm start",
        note: "Isso abrirá o navegador e mostrará o botão renderizado. 🎉",
      },
    ],
  };

  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <IconSidebar />
        <div className="bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5 mr-2.5">
          <NavToolbar />
          <div className="mt-2 px-4">
            <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
              <div className="relative">
                <h1 className="text-3xl font-bold mb-4">Preview</h1>
                <div className="flex flex-col gap-4 sticky top-0 py-5">
                  <div className="grid w-full items-center gap-1.5">
                    <Skeleton className="w-1/2 h-12 !bg-dark-100 dark:!bg-muted mb-2" />
                    <Skeleton className="w-full h-5 !bg-dark-100 dark:!bg-muted" />
                    <Skeleton className="w-full h-5 !bg-dark-100 dark:!bg-muted" />
                    <Skeleton className="w-full h-5 !bg-dark-100 dark:!bg-muted" />
                    <Skeleton className="w-full h-5 !bg-dark-100 dark:!bg-muted" />
                    <Skeleton className="w-1/3 h-5 !bg-dark-100 dark:!bg-muted" />
                    <div className="my-4 flex flex-col gap-1.5">
                      <Skeleton className="w-2/3 h-8 !bg-dark-100 dark:!bg-muted" />
                      <Skeleton className="w-2/4 h-4 !bg-dark-100 dark:!bg-muted" />
                      <Skeleton className="w-2/4 h-4 !bg-dark-100 dark:!bg-muted" />
                      <Skeleton className="w-2/4 h-4 !bg-dark-100 dark:!bg-muted" />
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <Categoring />
                      <Styling />
                      <Button
                        variant={"outline"}
                        onClick={() => setIsSelectPathsOpen(true)}
                      >
                        <Route className="mr-2 size-4" />
                        Adicionar a trilha de aprendizado
                      </Button>
                      <SelectPathsDialog
                        open={isSelectPathsOpen}
                        onOpenChange={setIsSelectPathsOpen}
                        paths={learningPaths}
                        article={currentArticle}
                      />
                    </div>

                    <div className="flex items-center gap-4 mt-5 ml-auto">
                      <Scheduler />
                      <Button>
                        <Globe className="mr-2 size-4" />
                        Publicar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Frame text="Preview" className="mb-6">
                  <div className="space-y-5 px-5 py-5">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-64 object-cover rounded-xl grayscale"
                    />
                    <h2 className="text-3xl font-bold">{tutorial.title}</h2>
                    <p className="text-muted-foreground">
                      {tutorial.description}
                    </p>
                    <p>
                      <span className="font-bold">Categoria:</span>{" "}
                      {tutorial.category}
                    </p>
                    <p>
                      <span className="font-bold">Dificuldade:</span>{" "}
                      {tutorial.difficulty}
                    </p>
                    <ul className="list-disc pl-6">
                      {tutorial.steps.map((step, index) => (
                        <li key={index}>
                          <h3 className="font-bold">{step.title}</h3>
                          <p className="mb-2">{step.content}</p>
                          {step.code && (
                            <pre className="bg-slate-800 text-white p-4 rounded-lg mb-4">
                              <code>{step.code}</code>
                            </pre>
                          )}
                          {step.note && (
                            <p className="text-muted-foreground">{step.note}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Frame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
