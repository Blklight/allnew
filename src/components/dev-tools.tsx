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
