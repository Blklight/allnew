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
import { useStore } from "@/store/use-store";
import { user } from "./dev-tools";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export function NewAccount() {
  const { setUser, setIsLogged } = useStore() as any;
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "UltimateMercer",
      email: "ultimate@mercer.com",
      password: "12345678",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setUser(user);
    setIsLogged(true);
    router.push("/");
  }

  return (
    <div className="grid gap-5 lg:w-80 w-96 mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-center mb-2">
          Criar conta
        </h1>
        <p>Crie uma nova conta</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mb-2.5">
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
              <FormItem className="mb-2.5">
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
              <FormItem className="mb-2.5">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
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
        <div className="relative flex gap-1 text-xs items-center uppercase">
          <div className="w-full h-[1px] bg-grey-medium"></div>
          <span className="whitespace-nowrap px-2 text-muted-foreground">
            Ou continue com
          </span>
          <div className="w-full h-[1px] bg-grey-medium"></div>
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
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Termos de Serviço
        </Link>{" "}
        e{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-primary"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}
