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
      <div className="relative bg-background shadow-md rounded-md border grid grid-cols-2 gap-4 my-5 mx-5">
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
        <div className="flex col-span-1 p-8">
          <div className="relative flex self-stretch min-w-0 flex-col bg-clip-border bg-light rounded-md shadow-md min-h-80 max-h-full overflow-hidden group dark:ring dark:ring-blklight-200">
            <img
              src={"https://i.imgur.com/xDEd3HH.jpg"}
              alt="Image"
              className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500 "
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 p-5 ounded-md flex flex-col">
              <h1 className="text-3xl font-bold text-white italic">All New</h1>
              <h1 className="text-6xl font-bold text-white">Blklight</h1>
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
                <h4 className="text-md text-right text-white font-bold">
                  <span className="marker-line bg-dark rounded-md !py-1">
                    Nocturne Ride by Ultimate Mercer
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* <Skeleton className="grow m-8 hidden lg:block" /> */}
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
