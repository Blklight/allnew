"use client";
import * as React from "react";
import { Newspaper, RocketLaunch, Sparkle } from "@phosphor-icons/react";
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

export const NavToolbar = () => {
  const { routeLogin, isLogged, user } = useStore((state: any) => state);

  const router = useRouter();

  const routeTools = [
    { label: "Criar artigo", value: "criar-artigo", icon: <Newspaper /> },
    { label: "Criar tutorial", value: "criar-tutorial", icon: <BookOpen /> },
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

  React.useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <SearchCommand />
        <div className="flex gap-2 items-center">
          {isLogged && (
            <SplitDropdownButton
              iconOnly
              icon={<Sparkle className="h-4 w-4" />}
              options={routeTools}
              variant="secondary"
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
