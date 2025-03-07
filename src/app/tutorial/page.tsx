"use client";
import Image from "next/image";
import { Frame } from "@/components/frame";
import { IconSidebar } from "@/components/icon-sidebar";
import { NavToolbar } from "@/components/nav-toolbar";
import { SidebarProvider } from "@/components/ui/sidebar";

import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Play } from "lucide-react";

export default function Tutorial() {
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
              <div className="">
                <Frame text="Tutorial" className="mb-6">
                  <div className="space-y-5 px-5 py-5">
                    <Image
                      src={tutorial.image}
                      alt={tutorial.title}
                      width={500}
                      height={500}
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
              <div className="relative pb-5">
                <div className="sticky top-0">
                  <div className="p-2 flex gap-2 ">
                    <Button>
                      {" "}
                      <Play className="w-5 h-5 mr-2" /> Run{" "}
                    </Button>
                    <div className="ml-auto flex gap-2">
                      <Button variant={"secondary"}>
                        {" "}
                        <Copy className="w-4 h-4 mr-2" /> Copy{" "}
                      </Button>
                      <Button variant={"secondary"}>
                        {" "}
                        <Download className="w-4 h-4 mr-2" /> Download{" "}
                      </Button>
                    </div>
                  </div>
                  <div className="!rounded-xl min-h-[400px] h-[650px] max-h-svh overflow-hidden">
                    <Editor
                      theme="vs-dark"
                      className="!rounded-xl "
                      defaultLanguage="javascript"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
