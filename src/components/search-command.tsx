"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";

export const SearchCommand = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant={"outline"}
        className={cn(
          "relative min-h-8 justify-start items-center rounded-md bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 lg:w-64 md:w-36 w-24 lg:max-w-[300px] cursor-pointer"
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden md:inline-flex">Pesquisar...</span>
        <span className="inline-flex md:hidden">
          <Search className="w-4 h-4 mr-2" />
        </span>

        <kbd className="pointer-events-none md:absolute md:right-[0.4rem] md:top-[0.45rem]  h-5 select-none items-center gap-1 rounded-md bg-bluesky-500 text-white px-1.5 text-[10px] font-medium opacity-100 flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite para pesquisar" className="" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            <CommandItem>
              <span>Projetos</span>
            </CommandItem>
            <CommandItem>
              <span>Tutoriais</span>
            </CommandItem>
            <CommandItem>
              <span>Artigos</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
