"use client";
import * as React from "react";
import { Books, Newspaper, RocketLaunch, Sparkle } from "@phosphor-icons/react";
import { SearchCommand } from "./search-command";
import { SplitDropdownButton } from "./ui/split-dropdown-button";
import { ModeToggle } from "./mode-toggle";
import { NavUser } from "./nav-user";
import { Button } from "./ui/button";
import { BookOpen, LogIn } from "lucide-react";
import { useStore } from "@/store/use-store";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent } from "./ui/sheet";
import { LoginFormDrawer } from "./login-form-drawer";
import { Skeleton } from "./ui/skeleton";
import { LoginButton } from "./login-button";
import { NewSearchCommand } from "./new-search-command";

export const NavToolbar = () => {
  const { routeLogin, isLogged, user } = useStore((state: any) => state);

  const router = useRouter();

  const routeTools = [
    { label: "Criar artigo", value: "criar-artigo", icon: <Newspaper /> },
    { label: "Criar tutorial", value: "criar-tutorial", icon: <Books /> },
    { label: "Criar projeto", value: "criar-projeto", icon: <RocketLaunch /> },
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
    <>
      <div className="flex justify-between items-center p-4 z-20 rounded-t-md ">
        <NewSearchCommand />
        <div className="flex gap-2 items-center">
          {isLogged && (
            <SplitDropdownButton
              className="md:flex hidden"
              label="Criar"
              icon={<Sparkle className="h-4 w-4" />}
              options={routeTools}
              onClick={() => router.push("/tools")}
            />
          )}

          <ModeToggle />
          {isLogged && user !== null && <NavUser user={user} />}
          {!isLogged && <LoginButton />}
        </div>
      </div>
    </>
  );
};
