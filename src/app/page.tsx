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
import BookmarkButton from "@/components/bookmark-comp";
import { ArticleCard } from "@/components/article-card";
import { BackgroundCard as NewBackgroundCard } from "@/components/background-card";
import { SimpleCard } from "@/components/simple-card";
import { getDocuments } from "@/services";
import { TutorialFrame } from "@/components/tutorial-frame";

export default async function Home() {
  const data = await getDocuments();
  console.log(data);

  return (
    <>
      <img
        src={"https://i.imgur.com/xDEd3HH.jpg"}
        alt="Image"
        className="w-full h-[500px] object-cover !bg-dark-100 dark:!bg-muted mb-4 rounded-lg "
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
        {/* <ArticleCard data={cardData} /> */}
        {/* <NewBackgroundCard data={} /> */}
        <BasicCard data={cardData} />
        <SocialCard data={cardData} />
        <BackgroundCard data={cardData} />
        <SimpleCard data={cardData} />
        {data.map((doc) => {
          console.log(doc);
          return (
            <NewBackgroundCard
              key={doc.document.slug}
              data={doc.document}
              authors={doc.authordetails}
            />
          );
        })}
      </div>
    </>
  );
}
