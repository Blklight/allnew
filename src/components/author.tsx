"use client";
import Image from "next/image";
import type { LanguageStore } from "@/utils/interfaces";
// import { useLanguageStore } from "@/store/useLanguageStore";
import { Button } from "./ui/button";
import {
  BehanceLogo,
  Browser,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { ariaLabel } from "@/utils/socials";
export const Author = () => {
  return (
    <div className="my-6">
      <h3 className="mb-3 md:text-left text-center text-[32px] font-bold">
        Escrito por:
      </h3>
      <div className="flex md:flex-row gap-6 flex-col items-center">
        <img
          src={"https://i.imgur.com/Qw6LuRE.jpg"}
          className={`w-36 h-36 rounded-full object-cover hover:scale-110 hover:ring-2 ring-gray-300 hover:shadow-lg transition-all !my-0`}
          width={144}
          height={144}
          alt={`Image`}
        />
        <div className="flex flex-col flex-1 justify-center">
          <h4 className="text-3xl font-bold tracking-wide mb-2">
            Julian Silva da Cunha
          </h4>
          <div className="flex gap-2 md:justify-start justify-center">
            <p>Estudante/Desenvolvedor Web/Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
