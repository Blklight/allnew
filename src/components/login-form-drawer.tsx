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
    console.log(values);
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
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <Button variant="outline" type="button">
          <GoogleLogo className="h-4 w-4" weight="bold" />
        </Button>
        <Button variant="outline" type="button">
          <GithubLogo className="h-4 w-4" weight="bold" />
        </Button>
      </div>
    </div>
  );
};
