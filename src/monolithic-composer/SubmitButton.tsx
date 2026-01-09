import React from "react";

type SubmitButtonProps = {
  isEditing?: boolean;
  onSubmit: () => void;
};

export const SubmitButton = ({ isEditing, onSubmit }: SubmitButtonProps) => (
  <button className="btn btn-primary" onClick={onSubmit}>
    {isEditing ? "Save" : "Send"}
  </button>
);
