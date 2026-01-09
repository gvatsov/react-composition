# Feature 1: Schedule Messages

## Product Requirement

> We need a way to schedule messages for later.
>
> Add a 'Clock' button to the footer.
>
> When clicked, it should prompt the user for a time (use `window.prompt` for simplicity).
>
> If a time is entered, it must NOT fire the standard `onSend`.
>
> Instead, it must fire a new prop/callback: `onSchedule(text, time)`.
>
> **Constraint:** This feature must ONLY be available in the 'New Message' view (not Threads, not Editing).
