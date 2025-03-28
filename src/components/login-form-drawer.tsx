"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { useStore } from "@/store/use-store";
import { user } from "./dev-tools";
import Link from "next/link";

export const loginSchema = z.object({
  login: z.string().min(2).max(50),
  password: z.string().min(8),
});

export const LoginFormDrawer = ({
  children,
  shouldOpenSheet,
}: {
  children?: React.ReactNode;
  shouldOpenSheet: (value: boolean) => void;
}) => {
  const { setUser, setIsLogged } = useStore() as any;
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "UltimateMercer",
      password: "12345678",
    },
  });

  const closeSheet = () => shouldOpenSheet(false);
  function onSubmit(values: z.infer<typeof loginSchema>) {
    setUser(user);
    setIsLogged(true);
    closeSheet();
  }

  return (
    <div className="grid gap-5 w-full mx-auto px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Login</h1>
        <p>Acessar sua conta</p>
      </div>
      {children}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="login"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Login</FormLabel>
                <FormControl>
                  <Input placeholder="Username ou E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-2" type="submit">
            Acessar
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="relative flex gap-1 text-xs items-center uppercase">
          <div className="w-full h-[1px] bg-grey-medium"></div>
          <span className="whitespace-nowrap px-2 text-muted-foreground">
            Ou continue com
          </span>
          <div className="w-full h-[1px] bg-grey-medium"></div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <Button type="button" variant={"secondary"}>
          <GoogleLogo className="h-4 w-4" weight="bold" />
        </Button>
        <Button type="button" variant={"secondary"}>
          <GithubLogo className="h-4 w-4" weight="bold" />
        </Button>
      </div>
      <div className="mx-auto">
        {" "}
        <Button variant={"link"} asChild>
          <Link href={"/register"}>Não possui uma conta? Criar conta</Link>
        </Button>
      </div>
    </div>
  );
};
