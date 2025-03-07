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

import ComponentMultipleSelector from "./comp-234";
import { Tags } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Categoring = () => {
  return (
    <>
      <Drawer>
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
      </Drawer>
    </>
  );
};
