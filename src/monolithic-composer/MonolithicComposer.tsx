import React, { useState } from "react";
import { MonolithicComposerProps } from "./types";
import { Label } from "./Label";
import { Input } from "./Input";
import { Footer } from "./Footer";
import { AttachmentButton } from "./AttachmentButton";
import { FormattingButton } from "./FormattingButton";
import { ThreadCheckbox } from "./ThreadCheckbox";
import { CancelButton } from "./CancelButton";
import { SubmitButton } from "./SubmitButton";

export const MonolithicComposer = ({
  placeholder = "Message...",
  initialValue = "",
  onSend,
  isThread,
  isEditing,
  isDM,
  showAttachments = true,
  showFormatting = true,
}: MonolithicComposerProps) => {
  const [text, setText] = useState(initialValue);

  const handleSubmit = () => {
    onSend(text);
    if (!isEditing) setText(""); // Don't clear if editing
  };

  const handleCancel = () => {
    console.log("Cancel");
  };

  return (
    <div
      className="composer-container"
      style={{ borderColor: isEditing ? "#e9a820" : "#ddd" }}
    >
      <Label isEditing={isEditing} isThread={isThread} />

      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        isDM={isDM}
      />

      <Footer>
        <div style={{ display: "flex", gap: "8px" }}>
          {/* Conditional rendering hell starts here */}
          {showAttachments && !isEditing && <AttachmentButton />}
          {showFormatting && <FormattingButton />}
          {/* A special feature only for threads */}
          {isThread && !isDM && <ThreadCheckbox />}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          {isEditing && <CancelButton onCancel={handleCancel} />}
          <SubmitButton isEditing={isEditing} onSubmit={handleSubmit} />
        </div>
      </Footer>
    </div>
  );
};
