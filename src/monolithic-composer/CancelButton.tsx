import React from "react";

type CancelButtonProps = {
  onCancel: () => void;
};

export const CancelButton = ({ onCancel }: CancelButtonProps) => (
  <button className="btn btn-secondary" onClick={onCancel}>
    Cancel
  </button>
);
