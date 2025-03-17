import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { NavToolbar } from "@/components/nav-toolbar";

import { IconSidebar } from "@/components/icon-sidebar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookmarkButton from "@/components/bookmark-comp";
import { ArticleCard } from "@/components/article-card";
import { BackgroundCard } from "@/components/background-card";
import { SimpleCard } from "@/components/simple-card";
import { getDocuments } from "@/services";
import { TutorialFrame } from "@/components/tutorial-frame";
import DynamicBentoGrid from "@/components/dynamic-bento-grid";

import { AuroraText } from "@/components/magicui/aurora-text";

type CardLayoutType = "ArticleCard" | "BackgroundCard" | "SimpleCard";

const componentMap: Record<CardLayoutType, React.ComponentType<any>> = {
  ArticleCard,
  BackgroundCard,
  SimpleCard,
};

export default async function Home() {
  const data = await getDocuments();
  console.log(data);

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        All New{" "}
        <AuroraText
          colors={["#6A4DFF", "#28acff", "#f7f7f7", "#121212", "#FBF0D9"]}
        >
          Blklight
        </AuroraText>
      </h1>

      <div className="mb-6">
        <div className="relative flex self-stretch min-w-0 flex-col bg-clip-border rounded-md shadow-lg min-h-80 max-h-full overflow-hidden group ">
          {" "}
          <img
            src={"https://i.imgur.com/xDEd3HH.jpg"}
            alt="Image"
            className="w-full h-[525px] object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
            style={{ filter: "url(#blklightBlueskyWhiteBlack)" }}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 px-5 py-4 rounded-md flex flex-col">
            <div className="mt-auto flex items-center justify-between">
              <Button variant={"ghost"} size={"icon"} type="button" asChild>
                <img
                  src="/blklight-light.svg"
                  className="!max-w-none size-6"
                  width="24"
                  height="24"
                  alt="Ultimate Mercer Logo"
                />
              </Button>
              <h4 className="text-sm text-right text-light">
                <span className="bg-dark/70 px-2 rounded-md !py-1">
                  Projeto do dia: Nocturne Ride, por Ultimate Mercer
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src={"https://i.imgur.com/xDEd3HH.jpg"}
        alt="Image"
        className="w-full h-[500px] object-cover !bg-dark-100 dark:!bg-muted mb-5 rounded-md "
        style={{ filter: "url(#blklightBlueskyWhiteBlack)" }}
      /> */}

      <div>
        <h3 className="text-3xl font-bold mb-4">Mais recentes</h3>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
        {data.map((doc) => {
          console.log(doc.document.stylesheet.cardLayout);
          const cardLayout = doc.document.stylesheet
            .cardLayout as CardLayoutType;

          // Verifica se o cardLayout é válido, senão usa um fallback
          const CardComponent = componentMap[cardLayout] || SimpleCard;
          return (
            <CardComponent
              key={doc.document.slug}
              data={doc.document}
              authors={doc.authordetails}
            />
          );
        })}
      </div>
      <div className="">
        <DynamicBentoGrid data={data} />
      </div>
    </>
  );
}
