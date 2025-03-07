"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { LearningPath, Article } from "@/lib/types";

interface SelectPathsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  paths: LearningPath[];
  article: Article | null;
  // onAddToPath: (pathIds: string[]) => void;
}

export function SelectPathsDialog({
  open,
  onOpenChange,
  paths,
  article,
}: SelectPathsDialogProps) {
  const [selectedPaths, setSelectedPaths] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPaths = paths.filter(
    (path) =>
      path.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      path.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = () => {
    // onAddToPath(selectedPaths);
    setSelectedPaths([]);
    setSearchTerm("");
    onOpenChange(false);
  };

  const togglePath = (id: string) => {
    setSelectedPaths((prev) =>
      prev.includes(id) ? prev.filter((pathId) => pathId !== id) : [...prev, id]
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          setSelectedPaths([]);
          setSearchTerm("");
        }
        onOpenChange(newOpen);
      }}
    >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Adicionar a Trilhas de Aprendizado</DialogTitle>
          {article && (
            <DialogDescription>
              Selecione as trilhas para adicionar o artigo:{" "}
              <strong>{article.title}</strong>
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="py-4">
          <div className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar trilhas..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredPaths.length === 0 ? (
            <div className="text-center py-8 border rounded-lg bg-muted/40">
              <p className="text-muted-foreground">
                {searchTerm
                  ? "Nenhuma trilha encontrada para esta busca."
                  : "Você ainda não criou nenhuma trilha de aprendizado."}
              </p>
            </div>
          ) : (
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-2">
                {filteredPaths.map((path) => (
                  <div
                    key={path.id}
                    className="flex items-center space-x-3 p-3 border rounded-md hover:bg-accent/50 transition-colors"
                  >
                    <Checkbox
                      id={`path-${path.id}`}
                      checked={selectedPaths.includes(path.id)}
                      onCheckedChange={() => togglePath(path.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <label
                        htmlFor={`path-${path.id}`}
                        className="font-medium cursor-pointer"
                      >
                        {path.name}
                      </label>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {path.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        <DialogFooter>
          <div className="flex justify-between w-full">
            <div className="text-sm text-muted-foreground">
              {selectedPaths.length} trilha(s) selecionada(s)
            </div>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Pular
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={selectedPaths.length === 0}
              >
                Adicionar às Trilhas
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
