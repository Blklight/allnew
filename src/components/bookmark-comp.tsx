import React, { useState, useRef, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Interface para os locais de salvamento
interface SaveLocation {
  id: string;
  name: string;
}

// Interface para a posição do menu de contexto
interface MenuPosition {
  x: number;
  y: number;
}

const BookmarkButton: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Locais de salvamento
  const saveLocations: SaveLocation[] = [
    { id: "favorites", name: "Favoritos" },
    { id: "work", name: "Trabalho" },
    { id: "personal", name: "Pessoal" },
    { id: "later", name: "Ler mais tarde" },
  ];

  const handleLeftClick = (): void => {
    // Comportamento padrão para clique esquerdo: apenas salvar
    setIsBookmarked(!isBookmarked);
    console.log(
      `Item ${isBookmarked ? "removido dos" : "adicionado aos"} favoritos`
    );
  };

  const handleSaveLocation = (locationId: string): void => {
    const location = saveLocations.find((loc) => loc.id === locationId);
    if (location) {
      console.log(`Item salvo em: ${location.name}`);
      setIsBookmarked(true);
      setOpen(false);
    }
  };

  const handleContextMenu = (e: MouseEvent<HTMLButtonElement>): void => {
    // Previne o menu de contexto padrão do navegador
    e.preventDefault();

    // Captura a posição do clique
    setPosition({ x: e.clientX, y: e.clientY });

    // Abre nosso menu personalizado
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Botão de bookmark */}
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        onClick={handleLeftClick}
        onContextMenu={handleContextMenu}
        className={`transition-colors ${
          isBookmarked ? "text-primary" : "text-muted-foreground"
        }`}
      >
        <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`} />
      </Button>

      {/* Menu de contexto controlado manualmente */}
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuContent
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
          }}
          className="min-w-40"
        >
          <DropdownMenuItem disabled className="text-sm font-medium">
            Salvar em...
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {saveLocations.map((location) => (
            <DropdownMenuItem
              key={location.id}
              onClick={() => handleSaveLocation(location.id)}
            >
              {location.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <p className="text-sm text-center text-muted-foreground">
        {isBookmarked ? "Salvo" : "Não salvo"} • Clique direito para mais opções
      </p>
    </div>
  );
};

export default BookmarkButton;
