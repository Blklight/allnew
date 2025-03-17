"use client";
import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { LoginForm } from "@/components/login-form";
import { AnimatePresence, motion } from "motion/react";
import { NewAccount } from "@/components/new-account";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Login() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="w-full flex flex-row h-svh">
      <div className="relative bg-background shadow-md rounded-md border flex flex-1 gap-4 my-5 mx-5">
        {/* <div className="absolute top-8 left-8 flex gap-2">
          <Button size={"icon"} asChild>
            <Link href="/">
              <img
                src="/blklight-light.svg"
                className="!max-w-none mx-auto size-6"
                width="24"
                height="24"
                alt="Ultimate Mercer Logo"
              />
            </Link>
          </Button>
          <ModeToggle />

          {isLogin ? (
            <Button variant={"ghost"} onClick={() => setIsLogin(false)}>
              Criar conta
            </Button>
          ) : (
            <Button variant={"ghost"} onClick={() => setIsLogin(true)}>
              Login
            </Button>
          )}
        </div> */}

        <div className="flex flex-col flex-1 m-8 space-y-6 lg:p-8">
          <div
            className={cn(
              "grid gap-5 md:w-96 w-80 mx-auto ",
              isLogin ? "mb-40" : "mb-16"
            )}
          >
            <div
              className={cn(" flex gap-2 justify-between", isLogin ? "" : "")}
            >
              <Button size={"icon"} asChild>
                <Link href="/">
                  <img
                    src="/blklight-light.svg"
                    className="!max-w-none mx-auto size-6"
                    width="24"
                    height="24"
                    alt="Ultimate Mercer Logo"
                  />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                {isLogin ? (
                  <Button variant={"ghost"} onClick={() => setIsLogin(false)}>
                    Criar conta
                  </Button>
                ) : (
                  <Button variant={"ghost"} onClick={() => setIsLogin(true)}>
                    Login
                  </Button>
                )}

                <ModeToggle />
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {isLogin ? <LoginForm /> : <NewAccount />}
            </motion.div>
          </AnimatePresence>
        </div>
        <Skeleton className="grow m-8 hidden lg:block" />
        {/* <div className="flex flex-1 flex-col justify-center m-8">
          <span className="text-[96px] font-bold">
            <span className="marker-line bg-bluesky-500 px-2">ALL</span>
          </span>
          <span className="text-[96px] font-bold">
            <span className="marker-line bg-bluesky-500 px-2">NEW</span>
          </span>
          <span className="text-[96px] font-bold">
            <span className="marker-line bg-bluesky-500 px-2">BLK</span>
          </span>
          <span className="text-[96px] font-bold">
            <span className="marker-line bg-bluesky-500 px-2">LIGHT</span>
          </span>
        </div> */}
      </div>
    </div>
  );
}
