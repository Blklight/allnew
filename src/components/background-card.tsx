"use client";

import { BarChart, Bookmark, Clock, ExternalLink, Share } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { CardData } from "./styling";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const BackgroundCard = ({ data }: { data: CardData }) => {
  return (
    <div className="relative flex self-start min-w-0 flex-col bg-clip-border bg-light rounded-md min-h-80 overflow-hidden">
      {/* <div className="absolute -top-2 left-4 flex items-center px-2 py-0.5 h-9 bg-dark text-cyber-yellow-500 border border-cyber-yellow-500">
        Artigo
      </div> */}

      <img
        src={"https://i.imgur.com/yb5WVlW.jpg"}
        alt={data.title}
        className="w-full min-h-[400px] max-h-[600px] object-cover rounded-md"
        style={{ filter: "url(#duotoneFilter)" }}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 rounded-md flex flex-col bg-gradient-to-b from-transparent from-50% to-black/90">
        <div className="flex justify-between mb-4">
          <div className="flex gap-2">
            <div className="flex items-center px-2 py-0.5 h-9 bg-orange-500 text-dark rounded-md">
              Tutorial
            </div>
            <div className="flex items-center px-2 py-0.5 h-9 bg-orange-300 text-dark rounded-md">
              <BarChart className="h-4 w-4 mr-1" />
              {data.difficulty}
            </div>
          </div>

          <Button
            size="icon"
            className="bg-orange-500 text-dark hover:text-light hover:bg-blklight-500 "
          >
            <Bookmark className="size-5" />
          </Button>
        </div>

        <Link href="#" className="hover:underline">
          <h4 className="text-[24px] font-barlow font-bold">
            Criando um Componente no React
          </h4>
        </Link>
        <p>{data.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {data.category.split("/").map((cat, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-dark text-orange-500 !rounded-md"
              >
                {cat.trim()}
              </Badge>
            ))}
            {/* <Badge variant="outline">{cardData.difficulty}</Badge> */}
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
              />
              <AvatarFallback>UM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-light">Ultimate Mercer</p>
              <div className="flex items-center text-xs text-dark">
                <Clock className="h-3 w-3 mr-1" />
                <span className=" text-light">13 Mar, 2025</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              className="flex gap-1 bg-dark text-orange-500 hover:bg-blklight-500 hover:text-light"
            >
              <Share className="h-4 w-4" /> Compartilhar
            </Button>
            <Button
              size="sm"
              className="flex gap-2 bg-dark text-orange-500 hover:bg-blklight-500 hover:text-light"
            >
              <ExternalLink className="h-4 w-4" /> Ler tutorial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
