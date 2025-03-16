// "use client";

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
import { Globe, Palette, Route, Tags } from "lucide-react";
import { SelectPathsDialog } from "@/components/select-path";
import { learningPaths } from "@/components/dev-tools";
import type { Article } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { ResponsiveResizable } from "@/components/responsive-resizable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDraftDocument } from "@/services";
import { allDocs, allAuthors } from "contentlayer/generated";
import BasicLayout from "@/components/layouts/basic-layout";
import { MDXComponents } from "@/components/mdx";
import { ShowArticlePreview } from "@/components/show-article-preview";
import { PathsSelection } from "@/components/paths-selection";

export default function Preview() {
  // const [isSelectPathsOpen, setIsSelectPathsOpen] = React.useState(false);
  // const [currentArticle, setCurrentArticle] = React.useState<Article | null>(
  //   null
  // );

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

  // const [article, setArticle] = React.useState<any>(null);

  // const [isLoading, setIsLoading] = React.useState(true);
  // React.useEffect(() => {
  //   const data = allDocs.find((doc) => doc.draft === true);
  //   if (data) {
  //     const author = allAuthors.find(
  //       (author) => author.name === data.authors[0].name
  //     );
  //     setArticle({ doc: data, authordetails: author });
  //   }
  //   setIsLoading(false);
  // }, []);

  // if (isLoading) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-2 grid-cols-1">
        <div className="relative p-4">
          <h1 className="text-3xl font-bold mb-4">Preview</h1>

          <div className="flex flex-col space-y-10 sticky top-0 py-5">
            <div className="border p-4 rounded-md shadow-md relative">
              <h5 className="text-[20px] font-bold mb-2">
                Categorias do tutorial
              </h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from(["Javascript", "React", "Tutorial"]).map(
                  (item, index) => (
                    <Badge key={index} className="!text-base">
                      <Tags className="mr-1 !size-4" />
                      {item}
                    </Badge>
                  )
                )}
              </div>
              <div className="absolute -top-5 right-4">
                <Categoring />
              </div>
            </div>
            <div className="border p-4 rounded-md shadow-md relative">
              <h5 className="text-[20px] font-bold mb-2">
                Trilha de aprendizado
              </h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from(["Desenvolvimento Front-end"]).map(
                  (item, index) => (
                    <Badge key={index} className="!text-base">
                      <Route className="mr-1 !size-4" />
                      {item}
                    </Badge>
                  )
                )}
              </div>
              <div className="absolute -top-5 right-4">
                {/* <Button
                  variant={"secondary"}
                  onClick={() => setIsSelectPathsOpen(true)}
                >
                  <Route className="mr-2 size-4" />
                  Trilha de aprendizado
                </Button> */}
                <PathsSelection />
              </div>
            </div>
            <div className="border p-4 rounded-md shadow-md relative">
              <h5 className="text-[20px] font-bold mb-2">Estilização</h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from(["Javascript", "React", "Tutorial"]).map(
                  (item, index) => (
                    <Badge key={index} className="!text-base">
                      <Palette className="mr-1 size-4" />
                      {item}
                    </Badge>
                  )
                )}
              </div>
              <div className="absolute -top-5 right-4">
                <Styling />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              {/* <div className="flex flex-wrap items-center gap-4 mt-4">
                <Categoring />

                <Button
                  variant={"outline"}
                  onClick={() => setIsSelectPathsOpen(true)}
                >
                  <Route className="mr-2 size-4" />
                  Adicionar a trilha de aprendizado
                </Button>
              </div> */}
              {/* <SelectPathsDialog
                open={isSelectPathsOpen}
                onOpenChange={setIsSelectPathsOpen}
                paths={learningPaths}
                article={currentArticle}
              /> */}
              <div className="flex items-center gap-4 mt-5 ml-auto">
                <Scheduler />
                <Button size={"lg"}>
                  <Globe className="mr-2 size-4" />
                  Publicar
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <ShowArticlePreview />
          {/* <Frame text="Preview" className="mb-6">
            {article?.doc?.body?.code && (
              <MDXComponents
                layout={"basic-layout"}
                doc={article.doc}
                code={article?.doc?.body?.code}
              />
            )}

            <div className="space-y-5 px-5 py-5">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-64 object-cover rounded-xl grayscale"
              />
              <h2 className="text-3xl font-bold">{tutorial.title}</h2>
              <p className="text-muted-foreground">{tutorial.description}</p>
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
          </Frame> */}
        </div>
      </div>

      {/* <ResponsiveResizable
        defaultSizes={[40, 60]}
        className="min-h-[500px] border rounded-md"
      >
        
      </ResponsiveResizable> */}
      {/* <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div className="relative px-4">
            <h1 className="text-3xl font-bold mb-4">Preview</h1>

            <div className="flex flex-col gap-4 sticky top-0 py-5">
              <div className="border p-4 rounded-md shadow-md relative">
                <h5 className="text-[20px] font-bold mb-2">
                  Categorias do tutorial
                </h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.from(["Javascript", "React", "Tutorial"]).map(
                    (item, index) => (
                      <Badge key={index} className="!text-base">
                        <Tags className="mr-1 !size-4" />
                        {item}
                      </Badge>
                    )
                  )}
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Categoring />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <div className="flex flex-wrap items-center gap-4 mt-4">
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
                  <Button size={"lg"}>
                    <Globe className="mr-2 size-4" />
                    Publicar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="px-4">
            <Frame text="Preview" className="mb-6">
              <div className="space-y-5 px-5 py-5">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-64 object-cover rounded-xl grayscale"
                />
                <h2 className="text-3xl font-bold">{tutorial.title}</h2>
                <p className="text-muted-foreground">{tutorial.description}</p>
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
        </ResizablePanel>
      </ResizablePanelGroup> */}
      {/* <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
        <div className="">
          <Frame text="Preview" className="mb-6">
            <div className="space-y-5 px-5 py-5">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="w-full h-64 object-cover rounded-xl grayscale"
              />
              <h2 className="text-3xl font-bold">{tutorial.title}</h2>
              <p className="text-muted-foreground">{tutorial.description}</p>
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
      </div> */}
    </>
  );
}
