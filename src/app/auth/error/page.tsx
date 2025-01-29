import { MailX } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-8">
      <MailX className="size-10 text-destructive" />
      <h1 className="text-2xl font-bold">Unable to sign in</h1>
      <p className="mt-2 text-center">
        The sign in link is no longer valid. The account may have been logged in
        on another browser or the token may have expired.
      </p>
    </div>
  );
}
