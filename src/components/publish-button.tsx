"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Check, Globe } from "lucide-react";

export const PublishButton = () => {
  const router = useRouter();
  const publish = () => {
    toast(
      <div className="font-inter text-base flex items-center gap-1">
        {" "}
        <Check className=" size-6" /> Publicado com sucesso!
      </div>
    );
    router.push("/");
  };

  return (
    <Button size={"lg"} type="button" onClick={() => publish()}>
      <Globe className=" size-5" />
      Publicar
    </Button>
  );
};
