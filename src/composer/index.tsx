// Namespace export for cleaner usage
export { Root } from "./Root";
export { Input } from "./Input";
export { Footer } from "./Footer";
export { SendButton } from "./SendButton";
export { IconButton } from "./IconButton";
export { Checkbox } from "./Checkbox";
export { FormattingButton } from "./FormattingButton";
export { ComposerContext } from "./ComposerContext";
export type { ComposerContextType } from "./ComposerContext";

// Composer namespace object for backward compatibility
import { Root } from "./Root";
import { Input } from "./Input";
import { Footer } from "./Footer";
import { SendButton } from "./SendButton";
import { IconButton } from "./IconButton";
import { Checkbox } from "./Checkbox";
import { FormattingButton } from "./FormattingButton";

export const Composer = {
  Root,
  Input,
  Footer,
  SendButton,
  IconButton,
  Checkbox,
  FormattingButton,
};
