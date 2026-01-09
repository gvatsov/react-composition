import React from "react";

type LabelProps = {
  isEditing?: boolean;
  isThread?: boolean;
};

export const Label = ({ isEditing, isThread }: LabelProps) => {
  const getLabelText = () => {
    if (isEditing) return "Editing Message";
    if (isThread) return "Replying to thread";
    return "New Message";
  };

  return <span className="composer-label">{getLabelText()}</span>;
};
