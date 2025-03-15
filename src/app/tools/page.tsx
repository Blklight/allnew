"use client";
import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { NavUser } from "@/components/nav-user";
import { SearchCommand } from "@/components/search-command";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SplitDropdownButton } from "@/components/ui/split-dropdown-button";
import {
  BookOpen,
  Edit,
  EllipsisVertical,
  GalleryVerticalEnd,
  LogIn,
  Plus,
} from "lucide-react";
import Image from "next/image";
import { useStore } from "@/store/use-store";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Newspaper, RocketLaunch } from "@phosphor-icons/react";
import { NavToolbar } from "@/components/nav-toolbar";
import { IconSidebar } from "@/components/icon-sidebar";
import { cn } from "@/lib/utils";

export default function Tools() {
  const tools = [
    {
      title: "Criar artigo",
      icon: Newspaper,
      background: "bg-cyber-yellow-500",
      border: "border-dark",
      textColor: "text-dark",
    },
    {
      title: "Criar tutorial",
      icon: BookOpen,
      background: "bg-orange-500",
      border: "border-light",
      textColor: "text-light",
    },
    {
      title: "Criar projeto",
      icon: RocketLaunch,
      background: "bg-magenta-50",
      border: "border-magenta-500",
      textColor: "text-dark",
    },
  ];

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {tools.map((tool, index) => (
          <Card
            key={index}
            className={cn(
              "border-2 !rounded-md shadow-md transation-all hover:scale-105",
              tool.border,
              tool.background
            )}
          >
            <CardContent
              className={cn("relative flex flex-col gap-24", tool.textColor)}
            >
              <div className="">
                <h3 className="text-3xl font-bold mb-3">{tool.title}</h3>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </p>
                <ul className="mb-5 list-disc pl-5">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Integer nec odio.</li>
                  <li>Praesent libero.</li>
                  <li>Sed cursus ante dapibus diam.</li>
                </ul>
              </div>

              <Link href="/create" className="ml-auto hover:underline">
                {tool.title}
              </Link>
              <tool.icon className="size-56 absolute inset-0 m-auto opacity-15" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
