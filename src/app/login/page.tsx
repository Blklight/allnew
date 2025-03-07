"use client";
import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { LoginForm } from "@/components/login-form";
import { AnimatePresence, motion } from "motion/react";
import { NewAccount } from "@/components/new-account";

export default function Login() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="w-full flex flex-row h-svh">
      <div className="relative bg-slate-50 dark:bg-slate-950 shadow rounded-lg border flex flex-1 gap-4 my-5 mx-5">
        <div className="absolute top-8 right-8 flex gap-2">
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
        <Skeleton className="grow m-8 hidden lg:block" />
        <div className="flex flex-col flex-1 m-8 justify-center space-y-6 lg:p-8">
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
      </div>
    </div>
  );
}
