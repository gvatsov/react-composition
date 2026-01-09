import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. context to share state
type ComposerContextType = {
  text: string;
  setText: (s: string) => void;
  submit: () => void;
};
const ComposerContext = createContext<ComposerContextType | null>(null);

// 2. The Root Provider
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

// 3. Sub-components (Dumb UI or Context Consumers)
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

export const Footer = ({ children }: { children: ReactNode }) => (
  <div className="composer-footer">{children}</div>
);

export const SendButton = ({ label = "Send" }: { label?: string }) => {
  const ctx = useContext(ComposerContext)!;
  return (
    <button className="btn btn-primary" onClick={ctx.submit}>
      {label}
    </button>
  );
};

// Reusable parts that don't need context
export const IconButton = ({ icon }: { icon: string }) => (
  <button className="btn btn-secondary">{icon}</button>
);

export const Checkbox = ({ label }: { label: string }) => (
  <label className="checkbox-wrapper">
    <input type="checkbox" /> {label}
  </label>
);

// Namespace export for cleaner usage
export const Composer = {
  Root,
  Input,
  Footer,
  SendButton,
  IconButton,
  Checkbox,
};
