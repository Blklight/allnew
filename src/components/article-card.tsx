"use client";

import { Bookmark, Clock, ExternalLink, Share } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { CardData } from "./styling";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import type { DocumentCard } from "@/utils/interfaces";

const styles = {
  tutorial: {
    title: "text-dark",
    background: "bg-orange-500 text-dark",
    difficultyBg: "bg-orange",
    difficultyColor: "text-dark",
    tags: "bg-dark text-orange-500",
    filter: "#orangeWhite",
  },
  article: {
    title: "text-light",
    background: "bg-cyber-yellow-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-dark text-cyber-yellow-500",
    filter: "#yellowBlack",
  },
  project: {
    title: "text-light",
    background: "bg-cyber-yellow-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-dark text-cyber-yellow-500",
    filter: "#magentaBlack",
  },
};

export const ArticleCard = ({
  data,
  authors,
}: {
  data: DocumentCard;
  authors: any;
}) => {
  const typeManager = (type: string) => {
    if (type === "tutorial") return "Tutorial";
    if (type === "article") return "Artigo";
    if (type === "project") return "Projeto";
  };
  return (
    <div className="relative self-start rounded-md border border-dark bg-cyber-yellow-500 text-dark shadow-md p-4">
      <div className="absolute -top-2 left-4 flex items-center px-2 py-0.5 h-9 bg-dark text-cyber-yellow-500 border border-cyber-yellow-500">
        {typeManager(data.documentType)}
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
          <h4 className={cn("text-[24px] font-playfair font-bold")}>
            {data.title}
          </h4>
        </Link>

        <p className={cn("font-eb-garamond mb-4")}>{data.description}</p>
        <div className="mb-4">
          <img
            src={data.cover || "/placeholder.svg"}
            alt={data.title}
            className="w-full h-52 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {data.tags?.map((cat, index) => (
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
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 hover:space-x-1 *:data-[slot=avatar]:size-10 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out">
            {authors?.map((author: any, index: any) => (
              <Avatar key={index}>
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback className="uppercase">
                  {author.name
                    .split(" ")
                    .map((word: any) => word[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div>
            <div className="flex items-center text-xs text-dark">
              <span className="text-light">13 Mar, 2025</span>
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
