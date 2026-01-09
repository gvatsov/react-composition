// Props type for MonolithicComposer
export type MonolithicComposerProps = {
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
