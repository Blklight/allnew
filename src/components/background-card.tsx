"use client";

import * as React from "react";
import { BarChart, Bookmark, Clock, ExternalLink, Share } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { CardData } from "./styling";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import type { DocumentCard } from "@/utils/interfaces";
import { cn } from "@/lib/utils";

const styles = {
  tutorial: {
    title: "text-dark",
    color: "text-orange-500",
    bg: "",
    underline: "text-orange-500",
    background: "bg-orange-500 text-dark",
    difficultyBg: "bg-orange",
    difficultyColor: "text-dark",
    tags: "bg-dark text-orange-500",
    filter: "#orangeWhite",
  },
  article: {
    title: "text-light",
    color: "text-cyber-yellow-500",
    bg: "",
    underline: "text-cyber-yellow-500",
    background: "bg-cyber-yellow-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-dark text-cyber-yellow-500",
    filter: "#yellowWhiteBlack",
  },
  project: {
    title: "text-light",
    color: "text-magenta-400",
    bg: "",
    underline: "text-magenta-400",
    background: "bg-magenta-500 text-dark",
    // difficultyBg: "bg-orange",
    // difficultyColor: "text-dark",
    tags: "bg-magenta-500 text-dark",
    filter: "#magentaWhite",
  },
};

export const BackgroundCard = ({
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

  return (
    <div className="relative flex self-start min-w-0 flex-col bg-clip-border  rounded-md shadow-md min-h-80 overflow-hidden group">
      <img
        src={data.cover || "https://i.imgur.com/yb5WVlW.jpg"}
        alt={data.title}
        className="w-full min-h-[525px] max-h-[650px] object-cover rounded-md group-hover:scale-110 transition-transform duration-500 "
        style={{ filter: `url(${cardStyles.filter})` }}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 rounded-md flex flex-col bg-gradient-to-b from-transparent from-40% to-black/90">
        <div className="flex justify-between mb-2.5">
          <div className="flex gap-2">
            <div
              className={cn(
                "flex items-center px-2 py-0.5 h-9 bg-orange-500 text-dark rounded-md shadow-md capitalize",
                cardStyles.tags
              )}
            >
              {typeManager(data.documentType)}
            </div>
            {data.tutorial?.difficulty && (
              <div className="flex items-center px-2 py-0.5 h-9 bg-orange-300 text-dark rounded-md">
                <BarChart className="h-4 w-4 mr-1" />
                {data.tutorial?.difficulty}
              </div>
            )}
          </div>

          <Button
            size="icon"
            className={cn(
              "hover:text-light hover:bg-blklight-500",
              cardStyles.background
            )}
          >
            <Bookmark className="size-5" />
          </Button>
        </div>

        {/* <Link href={`${data.slug}`} className="hover:underline">
          <h4
            className={cn(
              "text-[24px] font-barlow font-bold",
              data.stylesheets?.typography
            )}
          >
            {data.title}
          </h4>
        </Link>
        <p className={cn("", data.stylesheets?.typography)}>
          {data.description}
        </p> */}
        <div className="mt-auto">
          <Link
            href={`${data.slug}`}
            className={cn("hover:underline", cardStyles.underline)}
          >
            <h4
              className={cn(
                "text-[24px] font-barlow font-bold mb-2",
                data.stylesheet?.typography
              )}
            >
              <span className={cn("marker-line bg-dark", cardStyles.color)}>
                {data.title}
              </span>
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
            <span className={cn("marker-line bg-dark !py-1", cardStyles.color)}>
              {data.description}
            </span>
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {data.tags?.map((cat, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={cn("!rounded-md capitalize", cardStyles.tags)}
              >
                {cat.trim()}
              </Badge>
            ))}
            {/* <Badge variant="outline">{cardData.difficulty}</Badge> */}
          </div>
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
              <div className="flex items-center text-xs">
                <span
                  className={cn("marker-line bg-dark !py-1", cardStyles.color)}
                >
                  13 Mar 2025
                </span>
              </div>
            </div>
          </div>
          {/* <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 hover:space-x-1 *:data-[slot=avatar]:size-10 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div> */}
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
                <span className="lowercase">
                  {typeManager(data.documentType)}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
