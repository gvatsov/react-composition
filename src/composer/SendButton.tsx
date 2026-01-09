import React, { useContext } from "react";
import { ComposerContext } from "./ComposerContext";

export const SendButton = ({ label = "Send" }: { label?: string }) => {
  const ctx = useContext(ComposerContext)!;
  return (
    <button className="btn btn-primary" onClick={ctx.submit}>
      {label}
    </button>
  );
};
