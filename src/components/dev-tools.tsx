"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Code, Wrench } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useStore } from "@/store/use-store";

export const user = {
  name: "Ultimate Mercer",
  email: "ultimate@mercer.com",
  avatar: "/ultimate-mercer-logo.jpg",
};

export const learningPaths = [
  {
    id: "1",
    name: "Desenvolvimento Frontend",
    description:
      "Aprenda as tecnologias essenciais para desenvolvimento frontend",
    articles: [
      {
        id: "1",
        title: "Introdução ao React",
        url: "https://example.com/react-intro",
        description: "Um guia completo para iniciantes em React",
        imageUrl: "/placeholder.svg?height=100&width=200",
        addedAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "CSS Grid Layout",
        url: "https://example.com/css-grid",
        description: "Dominando layouts com CSS Grid",
        imageUrl: "/placeholder.svg?height=100&width=200",
        addedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "2",
    name: "Desenvolvimento Backend",
    description: "Recursos para aprender desenvolvimento backend",
    articles: [],
  },
];

const FormSchema = z.object({
  routeLogin: z.boolean().default(false),
  isLogged: z.boolean().default(false),
});

export const DevTools = () => {
  const { setRouteLogin, setIsLogged, setUser } = useStore() as any;
  const defaultRouteLogin = useStore((state: any) => state.routeLogin);
  const defaultIsLogged = useStore((state: any) => state.isLogged);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      routeLogin: defaultRouteLogin,
      isLogged: defaultIsLogged,
    },
  });

  const routeLogin = form.watch("routeLogin");
  const isLogged = form.watch("isLogged");

  React.useEffect(() => {
    setRouteLogin(routeLogin);
  }, [routeLogin]);

  React.useEffect(() => {
    setUser(isLogged ? user : null);
    setIsLogged(isLogged);
  }, [isLogged]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"icon"}
          className="fixed bottom-4 right-4 rounded-full border-2 bg-blue-400 hover:bg-blue-700 text-white cursor-pointer"
        >
          <Code className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dev Tools</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="routeLogin"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-md border p-4">
                  <div className="flex flex-col space-y-1 leading-none">
                    <FormLabel>Login via rota</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isLogged"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-md border p-4">
                  <div className="flex flex-col space-y-1 leading-none">
                    <FormLabel>Usuário logado</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export const defaultEditorValue = `
<h1>🎨 Introdução ao Desenvolvimento Front-End</h1>

<p>
  O <strong>desenvolvimento front-end</strong> é a área da programação responsável pela interface e experiência visual de aplicações web. Ele envolve tecnologias como
  <strong>HTML, CSS e JavaScript</strong>, além de frameworks modernos como
  <strong>React, Vue e Svelte</strong>.
</p>

<h2>🛠️ Tecnologias Essenciais</h2>

<ul>
  <li><strong>HTML (HyperText Markup Language)</strong> → Define a estrutura da página.</li>
  <li><strong>CSS (Cascading Style Sheets)</strong> → Adiciona estilos à página.</li>
  <li><strong>JavaScript</strong> → Permite interatividade com a página.</li>
  <li><strong>React</strong> → Biblioteca para criar interfaces dinâmicas.</li>
</ul>

<h2>🚀 Criando uma Página Web do Zero</h2>

<pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Minha Primeira Página&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Bem-vindo ao Front-End!&lt;/h1&gt;
    &lt;button id="btn"&gt;Clique Aqui&lt;/button&gt;
  &lt;/header&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<h2>⚡ Estilizando com CSS</h2>

<pre><code class="language-css">
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f4f4f4;
}

header {
  margin-top: 50px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</code></pre>

<h2>⚡ Adicionando Interatividade com JavaScript</h2>

<pre><code class="language-javascript">
document.getElementById("btn").addEventListener("click", function () {
  alert("Você clicou no botão!");
});
</code></pre>

<h2>📌 Conclusão</h2>

<p>
  Agora que você aprendeu os conceitos básicos, pode começar a explorar frameworks como
  <strong>React e Next.js</strong>, além de técnicas avançadas como responsividade e animações!
</p>
`;

export const defaultEditorJsonValue = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [
        { type: "text", text: "🎨 Introdução ao Desenvolvimento Front-End" },
      ],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "O " },
        {
          type: "text",
          marks: [{ type: "bold" }],
          text: "desenvolvimento front-end",
        },
        {
          type: "text",
          text: " é a área da programação responsável pela interface e experiência visual de aplicações web. Ele envolve tecnologias como ",
        },
        {
          type: "text",
          marks: [{ type: "bold" }],
          text: "HTML, CSS e JavaScript",
        },
        { type: "text", text: ", além de frameworks modernos como " },
        {
          type: "text",
          marks: [{ type: "bold" }],
          text: "React, Vue e Svelte",
        },
        { type: "text", text: "." },
      ],
    },
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "🛠️ Tecnologias Essenciais" }],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "HTML (HyperText Markup Language) → Define a estrutura da página.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "CSS (Cascading Style Sheets) → Adiciona estilos à página.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "JavaScript → Permite interatividade com a página.",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "React → Biblioteca para criar interfaces dinâmicas.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "tutorialBlock",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "heading",
              attrs: { level: 2 },
              content: [
                { type: "text", text: "🚀 Criando uma Página Web do Zero" },
              ],
            },
            {
              type: "codeBlock",
              attrs: { language: "html" },
              content: [
                {
                  type: "text",
                  text: '<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Minha Primeira Página</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <header>\n    <h1>Bem-vindo ao Front-End!</h1>\n    <button id="btn">Clique Aqui</button>\n  </header>\n  <script src="script.js"></script>\n</body>\n</html>',
                },
              ],
            },
            {
              type: "heading",
              attrs: { level: 2 },
              content: [{ type: "text", text: "⚡ Estilizando com CSS" }],
            },
            {
              type: "codeBlock",
              attrs: { language: "css" },
              content: [
                {
                  type: "text",
                  text: "body {\n  font-family: Arial, sans-serif;\n  text-align: center;\n  background-color: #f4f4f4;\n}\n\nheader {\n  margin-top: 50px;\n}\n\nbutton {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}",
                },
              ],
            },
            {
              type: "heading",
              attrs: { level: 2 },
              content: [
                {
                  type: "text",
                  text: "⚡ Adicionando Interatividade com JavaScript",
                },
              ],
            },
            {
              type: "codeBlock",
              attrs: { language: "javascript" },
              content: [
                {
                  type: "text",
                  text: 'document.getElementById("btn").addEventListener("click", function () {\n  alert("Você clicou no botão!");\n});',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "📌 Conclusão" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Agora que você aprendeu os conceitos básicos, pode começar a explorar frameworks como ",
        },
        { type: "text", marks: [{ type: "bold" }], text: "React e Next.js" },
        {
          type: "text",
          text: ", além de técnicas avançadas como responsividade e animações!",
        },
      ],
    },
  ],
};

export const articleData = {
  doc: {
    title: "Introdução ao Desenvolvimento Front-End",
    description:
      "Aprenda os conceitos fundamentais do desenvolvimento front-end e crie sua primeira página web moderna.",
    documentType: "tutorial",
    date: "2025-03-15T17:42:00.000Z",
    tags: ["front-end", "html", "css", "javascript", "react"],
    draft: true,
    cover: "https://i.imgur.com/Qw6LuRE.jpg",
    stylesheet: {
      pageLayout: "",
      cardLayout: "article-card",
      typography: "jetbrains-font",
      filter: "",
      type: "Stylesheet",
      _raw: {},
    },
    tutorial: {
      step: null,
      difficulty: "iniciante",
      type: "Tutorial",
      _raw: {},
    },
    authors: [
      {
        name: "Ultimate Mercer",
        quote: null,
        type: "AuthorsArticle",
        _raw: {},
      },
    ],
    _id: "documents/front-end-tutorial.mdx",
    _raw: {
      sourceFilePath: "documents/front-end-tutorial.mdx",
      sourceFileName: "front-end-tutorial.mdx",
      sourceFileDir: "documents",
      contentType: "mdx",
      flattenedPath: "documents/front-end-tutorial",
    },
    type: "Doc",
    slug: "documents/front-end-tutorial",
  },
  authordetails: [
    [
      {
        name: "Ultimate Mercer",
        avatar: "https://i.imgur.com/rkCtudG.jpg",
        occupation: "Developer",
        email: null,
        github: "https://github.com",
        medium: null,
        twitter: "https://twitter.com/Twitter",
        linkedin: "https://www.linkedin.com",
        instagram: null,
        body: {
          raw: "",
          html: "",
        },
        _id: "authors/ultimatemercer.md",
        _raw: {
          sourceFilePath: "authors/ultimatemercer.md",
          sourceFileName: "ultimatemercer.md",
          sourceFileDir: "authors",
          contentType: "markdown",
          flattenedPath: "authors/ultimatemercer",
        },
        type: "Author",
      },
    ],
  ],
};
