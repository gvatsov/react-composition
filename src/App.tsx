import { MonolithicComposer } from "./monolithic-composer";
import { Composer } from "./composed-composer";
import "./styles.css";

export default function App() {
  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
      {/* SCENARIO 1: The Monolith */}
      <h3>⛔ The Monolithic Way</h3>
      <p>Trying to configure a "Thread Reply" view:</p>
      <MonolithicComposer
        onSend={(t) => alert(t)}
        isThread={true}
        // isDM={false} // Implicit logic: if isThread is true, isDM must be managed carefully
        showAttachments={true}
      />

      <hr style={{ margin: "40px 0" }} />

      {/* SCENARIO 2: The Composition Way */}
      <h3>✅ The Composed Way</h3>
      <p>Building the exact same "Thread Reply" view:</p>

      <Composer.Root onSend={(t) => alert(t)}>
        <span className="composer-label">Replying to thread</span>
        <Composer.Input placeholder="Reply to thread..." />

        <Composer.Footer>
          <div style={{ display: "flex", gap: "8px" }}>
            <Composer.IconButton icon="📎" />
            <Composer.FormattingButton />
            <Composer.Checkbox label="Also send to channel" />
          </div>
          <Composer.SendButton label="Reply" />
        </Composer.Footer>
      </Composer.Root>
    </div>
  );
}
