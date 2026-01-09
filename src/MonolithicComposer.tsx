import React, { useState } from "react";

// ❌ The Props Explosion
type Props = {
  placeholder?: string;
  initialValue?: string;
  onSend: (text: string) => void;
  // Variant flags
  isThread?: boolean;
  isEditing?: boolean;
  isDM?: boolean;
  // Feature flags that depend on variants
  showAttachments?: boolean;
  showFormatting?: boolean;
  autoFocus?: boolean;
};

export const MonolithicComposer = ({
  placeholder = "Message...",
  initialValue = "",
  onSend,
  isThread,
  isEditing,
  isDM,
  showAttachments = true,
  showFormatting = true,
}: Props) => {
  const [text, setText] = useState(initialValue);

  const handleSubmit = () => {
    onSend(text);
    if (!isEditing) setText(""); // Don't clear if editing
  };

  return (
    <div
      className="composer-container"
      style={{ borderColor: isEditing ? "#e9a820" : "#ddd" }}
    >
      <span className="composer-label">
        {isEditing
          ? "Editing Message"
          : isThread
          ? "Replying to thread"
          : "New Message"}
      </span>

      <textarea
        className="composer-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={isDM ? "Message @User" : placeholder}
      />

      <div className="composer-footer">
        <div style={{ display: "flex", gap: "8px" }}>
          {/* Conditional rendering hell starts here */}
          {showAttachments && !isEditing && (
            <button className="btn btn-secondary">📎</button>
          )}
          {showFormatting && <button className="btn btn-secondary">B</button>}
          {/* A special feature only for threads */}
          {isThread && !isDM && (
            <label className="checkbox-wrapper">
              <input type="checkbox" /> Also send to channel
            </label>
          )}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          {isEditing && (
            <button
              className="btn btn-secondary"
              onClick={() => console.log("Cancel")}
            >
              Cancel
            </button>
          )}
          <button className="btn btn-primary" onClick={handleSubmit}>
            {isEditing ? "Save" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};
