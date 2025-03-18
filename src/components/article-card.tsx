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
    background: "bg-orange-500 text-dark",
    difficultyBg: "bg-orange",
    difficultyColor: "text-dark",
    tags: "bg-dark text-orange-500",
    tagHeader: "bg-dark text-orange-500 border-orange-500",
    filter: "#orangeWhiteBlack",
  },
  article: {
    title: "text-light",
    background: "bg-cyber-yellow-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-dark text-cyber-yellow-500",
    tagHeader: "bg-dark text-cyber-yellow-500 border-cyber-yellow-500",
    filter: "#yellowWhiteBlack",
  },
  project: {
    title: "text-light",
    background: "bg-magenta-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-dark text-magenta-500",
    tagHeader: "bg-dark text-magenta-500 border-magenta-500",
    filter: "#magentaWhiteBlack",
  },
};

export const ArticleCard = ({
  data,
  authors,
}: {
  data: DocumentCard;
  authors: any;
}) => {
  const [cardStyles, setCardStyles] = React.useState<any>(
    styles[data.documentType as "article" | "project" | "tutorial"]
  );

  const [typography, setTypography] = React.useState<any>(
    data.stylesheet?.typography
  );
  // console.log(data);
  const typeManager = (type: string) => {
    if (type === "tutorial") return "Tutorial";
    if (type === "article") return "Artigo";
    if (type === "project") return "Projeto";
  };

  console.log(data.stylesheet?.typography);
  return (
    <div
      className={cn(
        "relative self-start rounded-md border border-dark shadow-md p-4 background-texture",
        cardStyles.background
      )}
    >
      <div className={cn("absolute -top-2 left-4 flex items-center gap-2")}>
        <span
          className={cn(
            "px-2 py-0.5 border flex items-center h-8",
            cardStyles.tagHeader
          )}
        >
          {typeManager(data.documentType)}
        </span>
        {data.tutorial?.difficulty && (
          <div
            className={cn(
              "flex items-center px-2 py-0.5 h-8 bg-orange-300 text-dark rounded-md"
            )}
          >
            <BarChart className="h-4 w-4 mr-1" />
            {data.tutorial?.difficulty}
          </div>
        )}
      </div>

      <div className="absolute -top-2 right-4">
        <Button
          size="icon"
          className={cn(
            "border hover:bg-blklight-500 hover:!border-blklight-500",
            cardStyles.tagHeader
          )}
        >
          <Bookmark className="size-5" />
        </Button>
      </div>
      <div className="flex flex-col pt-4">
        <Link href={`${data.slug}`} className="hover:underline">
          <h4
            className={cn(
              "text-[24px] font-bold",
              data.stylesheet?.typography
                ? data.stylesheet?.typography
                : "font-inter"
            )}
          >
            {data.title}
          </h4>
        </Link>

        <p
          className={cn(
            "mb-4",
            data.stylesheet?.typography === "serif-font"
              ? "eb-serif-font"
              : data.stylesheet?.typography
          )}
        >
          {data.description}
        </p>
        <div className="mb-4">
          <img
            src={data.cover || "https://i.imgur.com/YU2M76w.jpg"}
            alt={data.title}
            className="w-full min-h-[200px] max-h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
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
        {/* <Separator className="bg-dark" /> */}
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
                  cardStyles.tags
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
              cardStyles.tags
            )}
          >
            <Share className="h-4 w-4" /> Compartilhar
          </Button>
          <Button
            size="sm"
            className={cn(
              "flex gap-1  hover:bg-blklight-500 hover:text-light",
              cardStyles.tags
            )}
            asChild
          >
            <Link href={`${data.slug}`} className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> Ler{" "}
              <span className="lowercase">
                {typeManager(data.documentType)}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
