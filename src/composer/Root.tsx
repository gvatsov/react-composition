import React, { useState, ReactNode } from "react";
import { ComposerContext } from "./ComposerContext";

// The Root Provider
export const Root = ({
  children,
  initialValue = "",
  onSend,
}: {
  children: ReactNode;
  initialValue?: string;
  onSend: (t: string) => void;
}) => {
  const [text, setText] = useState(initialValue);
  const submit = () => {
    onSend(text);
    setText("");
  };
  return (
    <ComposerContext.Provider value={{ text, setText, submit }}>
      <div className="composer-container">{children}</div>
    </ComposerContext.Provider>
  );
};
