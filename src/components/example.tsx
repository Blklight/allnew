"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Edit,
  EllipsisVertical,
  GalleryVerticalEnd,
  LogIn,
  Plus,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { NavUser } from "./nav-user";
import { SidebarProvider } from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginForm } from "./login-form";
import { useStore } from "@/store/use-store";
import { useRouter } from "next/navigation";
import { DropdownButton } from "./ui/dropdown-button";
import { SplitDropdownButton } from "./ui/split-dropdown-button";
import { SearchCommand } from "./search-command";
import { LoginFormDrawer } from "./login-form-drawer";
import { AnimatePresence, motion } from "motion/react";
import { NavToolbar } from "./nav-toolbar";
import { BackgroundCard, cardData } from "./styling";

export const Example = () => {
  const routeLogin = useStore((state: any) => state.routeLogin);
  const router = useRouter();

  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  const fileOptions = [
    { label: "New File", value: "new-file" },
    { label: "Open...", value: "open" },
    { label: "Save", value: "save" },
    { label: "Save As...", value: "save-as" },
  ];
  const [openSheet, setOpenSheet] = React.useState(false);

  const handleLogin = (data: boolean) => {
    if (data) {
      router.push("/login");
    } else {
      setOpenSheet(true);
    }
  };

  return (
    <SidebarProvider>
      <div className="w-full flex flex-row min-h-svh">
        <div className="flex flex-col h-svh sticky top-0 gap-4 items-center py-5 px-2.5">
          <Button size={"icon"}>
            <Image
              src="/blklight-light.svg"
              className="!max-w-none mx-auto size-6 dark:invert invert-0"
              width="24"
              height="24"
              alt="Ultimate Mercer Logo"
            />
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
        <div className="bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex-1 my-2.5 mr-2.5">
          <NavToolbar />
          <div className="mt-2 mb-5 px-4">
            <Image
              src={"/example-img.jpg"}
              alt="Image"
              width={1200}
              height={1200}
              className="w-full h-96 object-cover !bg-dark-100 dark:!bg-muted mb-4 rounded-lg grayscale"
            />

            <div>
              <h3 className="text-3xl font-bold mb-2">Tutoriais</h3>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <BackgroundCard data={cardData} />
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
};
