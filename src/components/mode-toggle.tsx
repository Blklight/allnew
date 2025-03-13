"use client";

import * as React from "react";
import { Book, BookOpen, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const buttonIcon = () => {
    if (theme === "system") {
      if (resolvedTheme === "dark")
        return (
          <>
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all" /> Modo
            Escuro
          </>
        );
      if (resolvedTheme === "book")
        return (
          <>
            <BookOpen className="h-[1.2rem] w-[1.2rem] transition-all" /> Modo
            Livro
          </>
        );
      return (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" /> Modo Claro
        </>
      );
    }
    if (theme === "dark")
      return (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" /> Modo Escuro
        </>
      );
    if (theme === "book")
      return (
        <>
          <BookOpen className="h-[1.2rem] w-[1.2rem] transition-all" /> Modo
          Livro
        </>
      );
    return (
      <>
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" /> Modo Claro
      </>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {buttonIcon()}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-1 h-4 w-4" /> Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-1 h-4 w-4" />
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("book")}>
          <BookOpen className="mr-1 h-4 w-4" />
          Livro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="mr-1 h-4 w-4" />
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
