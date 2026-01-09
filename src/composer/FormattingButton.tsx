import React from "react";

// Formatting button component
export const FormattingButton = () => {
  const handleFormat = () => {
    // Formatting logic can be added here
    console.log("Formatting button clicked");
  };

  return (
    <button className="btn btn-secondary" onClick={handleFormat} title="Format">
      B
    </button>
  );
};
