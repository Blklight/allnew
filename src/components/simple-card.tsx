"use client";

import { BarChart, Bookmark, Clock, ExternalLink, Share } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { CardData } from "./styling";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

export const SimpleCard = ({ data }: { data: CardData }) => {
  return (
    <div className="flex flex-col rounded-br-md rounded-r-md border border-magenta-500 border-l-8 border-l-magenta-500 bg-magenta-50/50 dark:bg-magenta-50/90 p-4 self-start">
      <div className="flex justify-between items-center mb-2.5">
        <div className="flex items-center px-2 py-0.5 h-9 bg-magenta-500 text-dark rounded-md">
          Projeto
        </div>
        <Button
          size="icon"
          className="bg-magenta-500 text-dark hover:text-light hover:bg-blklight-500 "
        >
          <Bookmark className="size-5" />
        </Button>
      </div>

      <Link href="#" className="hover:underline text-dark">
        <h4
          className={cn("text-[24px] dark:text-dark font-jetbrains font-bold")}
        >
          {data.title}
        </h4>
      </Link>
      <p className="font-jetbrains text-dark mb-4">{data.description}</p>
      <div className="flex items-center gap-3 mb-3">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
          <AvatarFallback>UM</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-dark">Ultimate Mercer</p>
          <div className="flex items-center text-xs text-dark">
            <Clock className="h-3 w-3 mr-1" />
            <span className=" text-dark">13 Mar, 2025</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {data.category.split("/").map((cat, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-dark text-magenta-300 !rounded-md"
          >
            {cat.trim()}
          </Badge>
        ))}
        {/* <Badge variant="outline">{cardData.difficulty}</Badge> */}
      </div>
      <div className="flex items-center justify-between">
        <Button
          size="sm"
          className="flex gap-2 bg-magenta-500 text-dark hover:bg-blklight-500 hover:text-light"
        >
          <Share className="h-4 w-4" /> Compartilhar
        </Button>
        <Button
          size="sm"
          className="flex gap-2 bg-magenta-500 text-dark hover:bg-blklight-500 hover:text-light"
        >
          <ExternalLink className="h-4 w-4" /> Ler tutorial
        </Button>
      </div>
    </div>
  );
};
