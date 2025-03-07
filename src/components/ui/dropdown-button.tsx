"use client";
import { Button } from "@/components/ui/button";
import type React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface DropdownButtonProps {
  label: string;
  icon?: React.ReactNode;
  options: {
    label: string;
    value: string;
    onClick?: () => void;
  }[];
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onSelect?: (value: string) => void;
}

export function DropdownButton({
  label,
  icon,
  options,
  variant = "default",
  size = "default",
  className,
  onSelect,
}: DropdownButtonProps) {
  const handleSelect = (value: string, onClick?: () => void) => {
    onSelect?.(value);
    onClick?.();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {icon && <span className="mr-2">{icon}</span>}
          {label}
          <Separator orientation="vertical" className="mx-2 h-4" />
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => handleSelect(option.value, option.onClick)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
