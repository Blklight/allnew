"use client";
import * as React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { useStore } from "@/store/use-store";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { LoginFormDrawer } from "./login-form-drawer";
import { Skeleton } from "./ui/skeleton";

export const LoginButton = () => {
  const { routeLogin } = useStore((state: any) => state);
  const [openSheet, setOpenSheet] = React.useState(false);
  const [shouldOpenSheet, setShouldOpenSheet] = React.useState(false);
  const router = useRouter();

  const takeValue = (value: boolean) => {
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
      <Button onClick={() => handleLogin(routeLogin)}>
        <LogIn className="w-4 h-4" />
        Login
      </Button>
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent
          title="Login"
          className="w-[400px] sm:w-[500px] sm:max-w-[500px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] xl:max-w-[500px] p-8 m-2.5 overflow-y-auto border rounded-md background-texture flex flex-col justify-center"
        >
          <SheetTitle></SheetTitle>
          <LoginFormDrawer
            shouldOpenSheet={(value) => setOpenSheet(value)}
          ></LoginFormDrawer>
        </SheetContent>
      </Sheet>
    </>
  );
};
