// types/tiptap-extensions.d.ts
import { ChainedCommands } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    tutorialBlock: {
      /**
       * Add a tutorial block
       */
      setTutorialBlock: () => ReturnType;
    };
  }
}
