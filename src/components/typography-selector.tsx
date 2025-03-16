// src/components/editor/typography-selector.tsx
"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const typographyOptions = [
  { value: "inter", label: "Inter (Padrão)" },
  { value: "barlow", label: "Barlow" },
  { value: "jetbrains", label: "JetBrains Mono" },
  { value: "serif", label: "Serif" },
];

interface TypographySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TypographySelector({
  value,
  onChange,
}: TypographySelectorProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-[180px] justify-between"
        >
          {typographyOptions.find((option) => option.value === value)?.label ||
            "Selecionar fonte..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Pesquisar fonte..." />
          <CommandList>
            <CommandEmpty>Não encontrado.</CommandEmpty>
            <CommandGroup>
              {typographyOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => onChange(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      option.value === "inter" && "font-sans",
                      option.value === "barlow" && "font-barlow",
                      option.value === "jetbrains" && "font-mono",
                      option.value === "serif" && "font-serif"
                    )}
                  >
                    {option.label}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
