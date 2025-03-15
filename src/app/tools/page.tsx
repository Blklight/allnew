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
      title: "Novo artigo",
      cover: "./images/article.jpeg",
      icon: Newspaper,
      background: "bg-cyber-yellow-500",
      border: "border-dark",
      textColor: "text-cyber-yellow-500",
      typography: "font-playfair",
      filter: "#yellowWhiteBlack",
      button: "bg-dark text-cyber-yellow-500",
    },
    {
      title: "Novo tutorial",
      cover: "https://i.imgur.com/yb5WVlW.jpg",
      icon: BookOpen,
      background: "bg-orange-500",
      border: "border-light",
      textColor: "text-orange-300",
      typography: "font-barlow",
      filter: "#orangeWhite",
      button: "bg-light text-orange-500",
    },
    {
      title: "Novo projeto",
      cover: "https://i.imgur.com/yb5WVlW.jpg",
      icon: RocketLaunch,
      background: "bg-magenta-50",
      border: "border-magenta-500",
      textColor: "text-magenta-200",
      typography: "font-jetbrains",
      filter: "#magentaWhite",
      button: "bg-magenta-500 text-dark",
    },
  ];

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {tools.map((tool, index) => (
          <div key={index} className="relative">
            <div className="relative flex min-w-0 flex-col bg-clip-border bg-light rounded-md shadow-lg min-h-80 overflow-hidden group">
              <img
                src={tool.cover || "https://i.imgur.com/yb5WVlW.jpg"}
                alt={tool.title}
                className="w-full h-[450px] object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                style={{ filter: `url(${tool.filter})` }}
              />

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 rounded-md flex flex-col">
                <div className="flex gap-2 mb-2.5">
                  <div className="flex items-center px-2 py-0.5 h-9 bg-bluesky-500 text-light rounded-md">
                    Ferramenta de criação
                  </div>
                </div>
                <div className="">
                  <h3
                    className={cn(
                      "text-3xl font-bold mb-3",
                      tool.textColor,
                      tool.typography
                    )}
                  >
                    <span className={cn("marker-line bg-dark", tool.textColor)}>
                      {tool.title}
                    </span>
                  </h3>
                  <p className="mb-5">
                    <span className={cn("marker-line bg-dark", tool.textColor)}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid absolute -bottom-4 left-8 right-8">
              <Button
                className={cn(
                  "shadow-xs hover:bg-blklight-500 hover:text-light",
                  tool.button
                )}
                asChild
              >
                <Link
                  href={tool.title === "Novo tutorial" ? "/create" : "#"}
                  className="hover:underline"
                >
                  <Plus className="w-4 h-4" />
                  {tool.title}
                </Link>
              </Button>
            </div>
          </div>
        ))}
        {/* <div className="relative flex min-w-0 flex-col bg-clip-border bg-light rounded-md min-h-80 overflow-hidden group">
          <img
            src={tool.cover || "https://i.imgur.com/yb5WVlW.jpg"}
            alt={tool.title}
            className="w-full min-h-[475px] max-h-[650px] object-cover rounded-md group-hover:scale-110 transition-transform duration-500"
            style={{ filter: "url(#duotoneFilter)" }}
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 p-4 rounded-md flex flex-col">
            <div className="flex gap-2">
              <div className="flex items-center px-2 py-0.5 h-9 bg-orange-500 text-dark rounded-md capitalize">
                Ferramenta de criação
              </div>
            </div>
            <div className="">
              <h3
                className={cn(
                  "text-3xl font-bold mb-3",
                  tool.textColor,
                  tool.typography
                )}
              >
                {tool.title}
              </h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
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
            <Button size={"sm"} asChild>
              <Link
                href={tool.title === "Criar tutorial" ? "/create" : "#"}
                className="ml-auto hover:underline"
              >
                {tool.title}
              </Link>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
