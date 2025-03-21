import * as React from "react";
import { Categoring } from "@/components/categories";
import { Styling } from "@/components/styling";
import { Scheduler } from "@/components/scheduler";
import { Button } from "@/components/ui/button";
import { Globe, Palette, Route, Tags } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { ShowArticlePreview } from "@/components/show-article-preview";
import { PathsSelection } from "@/components/paths-selection";
import { PreviewInfo } from "@/components/preview-info";
import { PublishButton } from "@/components/publish-button";

export default function Preview() {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-2 grid-cols-1">
        <div className="relative p-4">
          <h1 className="text-3xl font-bold mb-4">Preview</h1>

          <div className="flex flex-col space-y-10 py-5">
            <PreviewInfo />
            <div className="border p-4 rounded-md shadow-md relative">
              <h5 className="text-[20px] font-bold mb-2">Categorias</h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from(["Javascript", "React", "Tutorial"]).map(
                  (item, index) => (
                    <Badge key={index} className="!text-base">
                      <Tags className="mr-1 !size-4" />
                      {item}
                    </Badge>
                  )
                )}
              </div>
              <div className="absolute -top-5 right-4">
                <Categoring />
              </div>
            </div>
            <div className="border p-4 rounded-md shadow-md relative">
              <h5 className="text-[20px] font-bold mb-2">
                Trilha de aprendizado
              </h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from(["Desenvolvimento Front-end"]).map(
                  (item, index) => (
                    <Badge key={index} className="!text-base">
                      <Route className="mr-1 !size-4" />
                      {item}
                    </Badge>
                  )
                )}
              </div>
              <div className="absolute -top-5 right-4">
                <PathsSelection />
              </div>
            </div>
            <div className="border p-4 rounded-md shadow-md relative">
              <h5 className="text-[20px] font-bold mb-2">Estilização</h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from(["Card com background", "Fonte serifada"]).map(
                  (item, index) => (
                    <Badge key={index} className="!text-base">
                      <Palette className="mr-1 size-4" />
                      {item}
                    </Badge>
                  )
                )}
              </div>
              <div className="absolute -top-5 right-4">
                <Styling />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <div className="flex items-center gap-4 mt-5 ml-auto">
                <Scheduler />
                <PublishButton />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <ShowArticlePreview layout={"basic-layout"} />
        </div>
      </div>
    </>
  );
}
