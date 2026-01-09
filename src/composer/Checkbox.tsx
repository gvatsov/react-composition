import React from "react";

// Reusable part that doesn't need context
export const Checkbox = ({ label }: { label: string }) => (
  <label className="checkbox-wrapper">
    <input type="checkbox" /> {label}
  </label>
);
