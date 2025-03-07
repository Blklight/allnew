"use client";
import * as React from "react";

import Image from "next/image";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { NavToolbar } from "@/components/nav-toolbar";
import { BackgroundCard, cardData } from "@/components/styling";
import { IconSidebar } from "@/components/icon-sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <IconSidebar />
        <div className="bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5 mr-2.5">
          <NavToolbar />
          <div className="mt-2 mb-5 px-4">
            <img
              src={"/example-img.jpg"}
              alt="Image"
              className="w-full h-96 object-cover !bg-dark-100 dark:!bg-muted mb-4 rounded-lg grayscale"
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
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
