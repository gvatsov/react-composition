import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isDM?: boolean;
};

export const Input = ({ value, onChange, placeholder = "Message...", isDM }: InputProps) => {
  return (
    <textarea
      className="composer-input"
      value={value}
      onChange={onChange}
      placeholder={isDM ? "Message @User" : placeholder}
    />
  );
};
