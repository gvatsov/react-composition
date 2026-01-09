import React from "react";

// Reusable part that doesn't need context
export const IconButton = ({ icon }: { icon: string }) => (
  <button className="btn btn-secondary">{icon}</button>
);
