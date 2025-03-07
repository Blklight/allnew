"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Clock,
  ExternalLink,
  Bookmark,
  Share2,
  BarChart,
  Palette,
  Router,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

// Definindo a interface para os dados do card
interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
}

// Dados de exemplo baseados no objeto fornecido
export const cardData: CardData = {
  id: 1,
  title: "Criando um Componente no React",
  description: "Aprenda a criar um componente funcional no React com hooks.",
  image: "/example-img.jpg",
  category: "Desenvolvimento Web / Front-end",
  difficulty: "Iniciante",
};

export default function CardSelector() {
  const [selectedLayout, setSelectedLayout] = useState("basic");

  return (
    <div className="w-full max-w-3xl mx-auto p-4 grid gap-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Estilo da publicação</h2>
        <p className="text-muted-foreground">
          Escolha entre três estilos diferentes de cards
        </p>
      </div>

      <div className="w-full max-w-xs">
        <Select
          defaultValue="basic"
          onValueChange={(value) => setSelectedLayout(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione um estilo de card" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Card Básico</SelectItem>
            <SelectItem value="social">Card Social</SelectItem>
            <SelectItem value="product">Card com Background</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        {selectedLayout === "basic" && <BasicCard data={cardData} />}
        {selectedLayout === "social" && <SocialCard data={cardData} />}
        {selectedLayout === "product" && <BackgroundCard data={cardData} />}
      </div>
    </div>
  );
}

export function BasicCard({ data }: { data: CardData }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
          </div>
          <Badge variant="outline">{data.difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <img
            src={data.image || "/placeholder.svg"}
            alt={data.title}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Badge variant="secondary" className="mr-2">
            {data.category}
          </Badge>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>5 min de leitura</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Salvar</Button>
        <Button>Ler Artigo</Button>
      </CardFooter>
    </Card>
  );
}

export function SocialCard({ data }: { data: CardData }) {
  return (
    <Card className="w-full overflow-hidden py-4 gap-4">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar"
            />
            <AvatarFallback>UM</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Ultimate Mercer</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              <span>Publicado há 2 dias</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="mb-4">{data.description}</p>
        <div className="mb-4">
          <img
            src={data.image || "/placeholder.svg"}
            alt={data.title}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {data.category.split("/").map((cat, index) => (
            <Badge key={index} variant="secondary">
              {cat.trim()}
            </Badge>
          ))}
          <Badge variant="outline">{data.difficulty}</Badge>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-3">
        <div className="flex justify-between w-full">
          <Button variant="ghost" size="sm" className="flex gap-1">
            <Bookmark className="h-4 w-4" /> Salvar
          </Button>
          <Button variant="ghost" size="sm" className="flex gap-1">
            <Share2 className="h-4 w-4" /> Compartilhar
          </Button>
          <Button variant="ghost" size="sm" className="flex gap-1">
            <ExternalLink className="h-4 w-4" /> Abrir
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function BackgroundCard({ data }: { data: CardData }) {
  const router = useRouter();
  return (
    <Card className="w-full overflow-hidden relative h-[400px] group">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110 grayscale"
        style={{
          backgroundImage: `url("${data.image}")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />

      <div className="relative z-20 flex flex-col h-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <Badge className="bg-primary hover:bg-primary/90">
              {data.difficulty}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-end">
          <div className="space-y-1 mb-2">
            {data.category.split("/").map((cat, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-white border-white mr-2"
              >
                {cat.trim()}
              </Badge>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
          <p className="text-gray-200 mb-4">{data.description}</p>

          <div className="flex items-center text-sm text-gray-300 mb-2">
            <BarChart className="h-4 w-4 mr-1" />
            <span>Nível: {data.difficulty}</span>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" onClick={() => router.push("/tutorial")}>
            Ler Artigo
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export const Styling = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>
          {" "}
          <Palette className="mr-2 size-4" /> Estilo da publicação
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[500px] sm:w-[600px] sm:max-w-[600px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] xl:max-w-[600px] p-8 m-2.5 overflow-y-auto border rounded-md">
        <CardSelector />
      </SheetContent>
    </Sheet>
  );
};
