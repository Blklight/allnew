"use client";
import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { NavToolbar } from "@/components/nav-toolbar";
import {
  BackgroundCard,
  BasicCard,
  cardData,
  SocialCard,
} from "@/components/styling";
import { IconSidebar } from "@/components/icon-sidebar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <IconSidebar />
        <div className="bg-background shadow-md rounded-lg border flex-1 my-2.5 mr-2.5">
          <NavToolbar />
          <div className="mt-2 mb-5 px-4">
            <img
              src={"/example-img.jpg"}
              alt="Image"
              className="w-full h-96 object-cover !bg-dark-100 dark:!bg-muted mb-4 rounded-lg grayscale"
            />

            <div>
              <h3 className="text-3xl font-bold mb-2">Tutoriais</h3>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <BackgroundCard key={index} data={cardData} />
                ))}
              </div>
            </div>
            <div className="">
              <Skeleton className="w-80 h-10 !bg-dark-100 dark:!bg-muted mb-4" />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                <Skeleton className="w-full h-72 !bg-dark-100 dark:!bg-muted" />
                <Skeleton className="w-full h-72 !bg-dark-100 dark:!bg-muted" />
                <Skeleton className="w-full h-72 !bg-dark-100 dark:!bg-muted" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
              <div className="relative self-start rounded-md border border-dark bg-cyber-yellow-500 text-dark shadow-md p-4">
                <div className="absolute -top-2 left-4 flex items-center px-2 py-0.5 h-9 bg-dark text-cyber-yellow-500 border border-cyber-yellow-500">
                  Artigo
                </div>
                <div className="absolute -top-2 right-4">
                  <Button size="icon">
                    <Bookmark className="size-5" />
                  </Button>
                </div>
                <div className="flex flex-col pt-4">
                  <Link href="#" className="hover:underline">
                    <h4 className="text-[24px] font-playfair font-bold">
                      Criando um Componente no React
                    </h4>
                  </Link>

                  <p className="font-eb-garamond mb-4">
                    {cardData.description}
                  </p>
                  <div className="mb-4">
                    <img
                      src={cardData.image || "/placeholder.svg"}
                      alt={cardData.title}
                      className="w-full h-52 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cardData.category.split("/").map((cat, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-dark text-cyber-yellow-500 !rounded-md"
                      >
                        {cat.trim()}
                      </Badge>
                    ))}
                    {/* <Badge variant="outline">{cardData.difficulty}</Badge> */}
                  </div>
                  {/* <Separator className="bg-dark" /> */}
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Avatar"
                      />
                      <AvatarFallback>UM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Ultimate Mercer</p>
                      <div className="flex items-center text-xs text-dark">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>13 Mar, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="flex gap-1">
                      <Bookmark className="h-4 w-4" /> Salvar
                    </Button>
                    <Button size="sm" className="flex gap-1">
                      <ExternalLink className="h-4 w-4" /> Ler artigo
                    </Button>
                  </div>
                </div>
              </div>
              <BasicCard data={cardData} />
              <SocialCard data={cardData} />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
