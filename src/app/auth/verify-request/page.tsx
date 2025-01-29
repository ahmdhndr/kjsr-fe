import { MailCheck } from "lucide-react";

export default function VerifyRequestPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-8">
      <MailCheck className="size-10" />
      <h1 className="text-2xl font-bold">Check your email</h1>
      <p className="mt-2">
        A sign in link has been sent to your email address.
      </p>
      <p className="mt-7 text-sm">
        Didn’t receive the email? Check your spam folder or try again.
      </p>
    </div>
  );
}
