"use client";
import type { Article } from "@/lib/types";
import * as React from "react";
import { Button } from "./ui/button";
import { Route } from "lucide-react";
import { SelectPathsDialog } from "./select-path";
import { learningPaths } from "./dev-tools";

export const PathsSelection = () => {
  const [isSelectPathsOpen, setIsSelectPathsOpen] = React.useState(false);
  const [currentArticle, setCurrentArticle] = React.useState<Article | null>(
    null
  );

  return (
    <>
      <Button variant={"secondary"} onClick={() => setIsSelectPathsOpen(true)}>
        <Route className="mr-2 size-4" />
        Trilha de aprendizado
      </Button>
      <SelectPathsDialog
        open={isSelectPathsOpen}
        onOpenChange={setIsSelectPathsOpen}
        paths={learningPaths}
        article={currentArticle}
      />
    </>
  );
};
