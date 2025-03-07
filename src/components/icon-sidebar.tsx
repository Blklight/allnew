"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, GalleryVerticalEnd, Plus } from "lucide-react";
import Link from "next/link";

export const IconSidebar = () => {
  return (
    <div className="flex flex-col h-svh sticky top-0 gap-4 items-center py-5 px-2.5">
      <Button size={"icon"} asChild>
        <Link href="/">
          <Image
            src="/blklight-light.svg"
            className="!max-w-none mx-auto size-6 dark:invert invert-0"
            width="24"
            height="24"
            alt="Ultimate Mercer Logo"
          />
        </Link>
      </Button>
      <Button variant={"secondary"} size={"icon"}>
        <GalleryVerticalEnd className="w-4 h-4" />
      </Button>
      <Button variant={"secondary"} size={"icon"}>
        <GalleryVerticalEnd className="w-4 h-4" />
      </Button>
      <Button variant={"secondary"} size={"icon"}>
        <GalleryVerticalEnd className="w-4 h-4" />
      </Button>
      <Button variant={"secondary"} size={"icon"}>
        <Plus className="w-4 h-4" />
      </Button>
      <Button variant={"secondary"} size={"icon"} className="mt-auto">
        <EllipsisVertical className="w-4 h-4" />
      </Button>
    </div>
  );
};
