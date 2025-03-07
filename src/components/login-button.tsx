"use client";
import * as React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { useStore } from "@/store/use-store";
import { Sheet, SheetContent } from "./ui/sheet";
import { LoginFormDrawer } from "./login-form-drawer";
import { Skeleton } from "./ui/skeleton";

export const LoginButton = () => {
  const { routeLogin } = useStore((state: any) => state);
  const [openSheet, setOpenSheet] = React.useState(false);
  const [shouldOpenSheet, setShouldOpenSheet] = React.useState(false);
  const router = useRouter();

  const takeValue = (value: boolean) => {
    console.log("takeValue", value);
    setOpenSheet(value);
  };

  const handleLogin = (data: boolean) => {
    if (data) {
      router.push("/login");
    } else {
      setOpenSheet(true);
    }
  };
  return (
    <>
      <Button
        variant={"secondary"}
        size={"icon"}
        onClick={() => handleLogin(routeLogin)}
      >
        <LogIn className="w-4 h-4" />
      </Button>
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent className="w-[400px] sm:w-[500px] sm:max-w-[500px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] xl:max-w-[500px] p-8 m-2.5 overflow-y-auto border rounded-md">
          <LoginFormDrawer shouldOpenSheet={(value) => setOpenSheet(value)}>
            <Skeleton className="w-full h-48 !bg-dark-100 dark:!bg-muted" />
          </LoginFormDrawer>
        </SheetContent>
      </Sheet>
    </>
  );
};
