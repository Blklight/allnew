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

import ComponentMultipleSelector from "./comp-234";
import { Palette, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Categoring = () => {
  return (
    <>
      {/* <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"outline"}>
            <Tags className="mr-2 size-4" />
            Categorias da publicação
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-md py-8 grid gap-10">
            <div>
              <h4 className="text-xl font-bold">Escolha as categorias</h4>
              <p>Escolha as categorias que mais se adequam a sua publicação</p>
            </div>

            <ComponentMultipleSelector />
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer> */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"secondary"} type="button">
            <Tags className="mr-2 size-4" />
            Escolher categorias da publicação
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[500px] sm:w-[600px] sm:max-w-[600px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] xl:max-w-[600px] p-8 m-2.5 overflow-y-auto border rounded-md">
          <div className="mx-auto w-full py-8 grid gap-4">
            <div>
              <h4 className="text-xl font-bold">Escolha as categorias</h4>
              <p>Escolha as categorias que mais se adequam a sua publicação</p>
            </div>

            <ComponentMultipleSelector />
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
