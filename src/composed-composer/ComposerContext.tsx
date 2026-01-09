import { createContext } from "react";

// Context to share state
export type ComposerContextType = {
  text: string;
  setText: (s: string) => void;
  submit: () => void;
};

export const ComposerContext = createContext<ComposerContextType | null>(null);
