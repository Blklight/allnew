"use client";

import { Bookmark, Clock, ExternalLink, Share } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { CardData } from "./styling";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const ArticleCard = ({ data }: { data: CardData }) => {
  return (
    <div className="relative self-start rounded-md border border-dark bg-cyber-yellow-500 text-dark shadow-md p-4">
      <div className="absolute -top-2 left-4 flex items-center px-2 py-0.5 h-9 bg-dark text-cyber-yellow-500 border border-cyber-yellow-500">
        Artigo
      </div>
      <div className="absolute -top-2 right-4">
        <Button
          size="icon"
          className="bg-dark border border-cyber-yellow-500 hover:bg-blklight-500 hover:!border-blklight-500"
        >
          <Bookmark className="size-5" />
        </Button>
      </div>
      <div className="flex flex-col pt-4">
        <Link href="#" className="hover:underline">
          <h4 className="text-[24px] font-playfair font-bold">
            Criando um Componente no React
          </h4>
        </Link>

        <p className="font-eb-garamond mb-4">{data.description}</p>
        <div className="mb-4">
          <img
            src={data.image || "/placeholder.svg"}
            alt={data.title}
            className="w-full h-52 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {data.category.split("/").map((cat, index) => (
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
          <Button
            size="sm"
            className="flex gap-1 bg-dark hover:bg-blklight-500"
          >
            <Share className="h-4 w-4" /> Compartilhar
          </Button>
          <Button
            size="sm"
            className="flex gap-2 bg-dark hover:bg-blklight-500"
          >
            <ExternalLink className="h-4 w-4" /> Ler artigo
          </Button>
        </div>
      </div>
    </div>
  );
};
