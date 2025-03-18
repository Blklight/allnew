"use client";

import * as React from "react";
import { BarChart, Bookmark, Clock, ExternalLink, Share } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { CardData } from "./styling";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import type { DocumentCard } from "@/utils/interfaces";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const styles = {
  tutorial: {
    title: "text-dark",
    borderColor: "border-l-orange-500 border-orange-500",
    color: "text-orange-500",
    bg: "bg-orange-50/50 dark:bg-orange-50/90",
    background: "bg-orange-500 text-dark",
    difficultyBg: "bg-orange",
    difficultyColor: "text-dark",
    tags: "bg-dark text-orange-500",
  },
  article: {
    title: "text-light",
    borderColor: "bordder-l-cyber-yellow-500 border-cyber-yellow-500",
    color: "text-cyber-yellow-500",
    bg: "bg-cyber-yellow-50/50 dark:bg-cyber-yellow-50/90",
    background: "bg-cyber-yellow-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-dark text-cyber-yellow-500",
  },
  project: {
    title: "text-light",
    borderColor: "border-l-magenta-500 border-magenta-500",
    color: "text-magenta-400",
    bg: "bg-magenta-50/50 dark:bg-magenta-50/90",
    background: "bg-magenta-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-magenta-500 text-dark",
  },
};

export const SimpleCard = ({
  data,
  authors,
}: {
  data: DocumentCard;
  authors: any;
}) => {
  const [cardStyles, setCardStyles] = React.useState<any>(
    styles[data.documentType]
  );
  const typeManager = (type: string) => {
    if (type === "tutorial") return "Tutorial";
    if (type === "article") return "Artigo";
    if (type === "project") return "Projeto";
  };

  console.log(authors);
  return (
    <div
      className={cn(
        "flex flex-col rounded-br-md rounded-r-md border  border-l-8  p-4 self-start background-texture",
        cardStyles.borderColor,
        cardStyles.bg
      )}
    >
      <div className="flex justify-between items-center mb-2.5">
        <div
          className={cn(
            "flex items-center px-2 py-0.5 h-9  rounded-md",
            cardStyles.tags
          )}
        >
          {typeManager(data.documentType)}
        </div>
        <Button
          size="icon"
          className={cn(
            " hover:text-light hover:bg-blklight-500 ",
            cardStyles.background
          )}
        >
          <Bookmark className="size-5" />
        </Button>
      </div>

      <Link href={`${data.slug}`} className="hover:underline text-dark">
        <h4
          className={cn(
            "text-[24px] dark:text-dark font-bold",
            data.stylesheet?.typography
          )}
        >
          {data.title}
        </h4>
      </Link>
      <p className={cn("text-dark mb-4", data.stylesheet?.typography)}>
        {data.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {data.tags?.map((cat, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={cn("!rounded capitalize", cardStyles.tags)}
          >
            {cat.trim()}
          </Badge>
        ))}
        {/* <Badge variant="outline">{cardData.difficulty}</Badge> */}
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 hover:space-x-1 *:data-[slot=avatar]:size-10 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="!size-10" asChild>
                <Avatar>
                  <AvatarImage
                    src={"/images/ultimate-mercer-base.jpg"}
                    className="object-cover"
                    alt={"Ultimate Mercer"}
                  />
                  <AvatarFallback className="uppercase">UM</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Ultimate Mercer</p>
              </TooltipContent>
            </Tooltip>
            {/* {authors?.map((author: any, index: any) => (
                            <Tooltip key={index}>
                              <TooltipTrigger className="!size-10" asChild>
                                <Avatar>
                                  <AvatarImage
                                    src={"/images/ultimate-mercer-base.jpg"}
                                    className="object-cover"
                                    alt={author.name}
                                  />
                                  <AvatarFallback className="uppercase">
                                    {author.name
                                      .split(" ")
                                      .map((word: any) => word[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                <p>{author.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))} */}
          </TooltipProvider>
        </div>
        <div>
          <div className="flex items-center font-semibold text-xs">
            <span
              className={cn(
                "marker-line bg-dark !py-1 rounded",
                cardStyles.color
              )}
            >
              13 Mar 2025
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          size="sm"
          className={cn(
            "flex gap-1 hover:bg-blklight-500 hover:text-light",
            cardStyles.background
          )}
        >
          <Share className="h-4 w-4" /> Compartilhar
        </Button>
        <Button
          size="sm"
          className={cn(
            "flex gap-1  hover:bg-blklight-500 hover:text-light",
            cardStyles.background
          )}
          asChild
        >
          <Link href={`${data.slug}`} className="flex items-center gap-1">
            <ExternalLink className="h-4 w-4" /> Ler{" "}
            <span className="lowercase">{typeManager(data.documentType)}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
