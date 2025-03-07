"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export function NewAccountDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="grid gap-5 w-full mx-auto px-4">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-center mb-2">
          Create New Account
        </h1>
        <p>Create a new account</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>Seu nome de usuário</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="you@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  Este é o seu endereço de e-mail.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
                <FormDescription>Esta é sua senha secreta.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-2" type="submit">
            Criar Conta
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
      <p className="px-8 text-center text-sm text-muted-foreground">
        Ao clicar em Criar Conta, você concorda com nossos{" "}
        <Link
          href="/termos"
          className="underline underline-offset-4 hover:text-primary"
        >
          Termos de Serviço
        </Link>{" "}
        e{" "}
        <Link
          href="/privacidade"
          className="underline underline-offset-4 hover:text-primary"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}
