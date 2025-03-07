"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  CalendarClock,
  CalendarIcon,
  Clock,
  Loader2,
  Plus,
} from "lucide-react";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";

export const Scheduler = () => {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState("12:00");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setOpen(false);
    // Resetar formulário ou mostrar mensagem de sucesso
  };

  const formatDate = (date: Date) => {
    return format(date, "PPP", { locale: ptBR });
  };

  const formatTime = (date: Date) => {
    return format(date, "p", { locale: ptBR });
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} className="gap-2">
          <CalendarClock className="mr-2 size-4" />
          Agendar Publicação
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-8">
        <form onSubmit={handleSubmit}>
          <DrawerHeader>
            <DrawerTitle>Agendar Nova Publicação</DrawerTitle>
            <DrawerDescription>
              Crie e agende seu conteúdo para publicação em diversas
              plataformas.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-6">
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/50">
                <h3 className="font-medium mb-2">
                  Sobre o Agendamento de Publicações
                </h3>
                <p className="text-sm text-muted-foreground">
                  Agendar suas publicações permite planejar seu conteúdo com
                  antecedência. Selecione uma data e hora futuras para que seu
                  conteúdo seja publicado automaticamente. Isso ajuda a manter
                  uma programação consistente e garante que seu conteúdo alcance
                  seu público nos momentos ideais.
                </p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex-1 space-y-2">
                <Label>Data de Publicação</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? formatDate(date) : "Selecionar data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={ptBR}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex-1 space-y-2">
                <Label htmlFor="time">Horário</Label>
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Agendando...
                </>
              ) : (
                "Agendar Publicação"
              )}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
