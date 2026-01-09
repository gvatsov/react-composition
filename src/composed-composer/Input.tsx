import React, { useContext } from "react";
import { ComposerContext } from "./ComposerContext";

// Sub-component (Dumb UI or Context Consumer)
export const Input = ({
  placeholder = "Message...",
}: {
  placeholder?: string;
}) => {
  const ctx = useContext(ComposerContext)!;
  return (
    <textarea
      className="composer-input"
      value={ctx.text}
      onChange={(e) => ctx.setText(e.target.value)}
      placeholder={placeholder}
    />
  );
};
