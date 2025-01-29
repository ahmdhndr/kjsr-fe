import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";

import { db } from "@/db";
import { envServer } from "@/lib/env/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "database",
  },
  adapter: DrizzleAdapter(db),
  providers: [
    Resend({
      from: envServer.EMAIL_FROM,
      server: {
        host: envServer.EMAIL_SERVER_HOST,
        port: envServer.EMAIL_SERVER_PORT,
        auth: {
          user: envServer.EMAIL_SERVER_USER,
          pass: envServer.EMAIL_SERVER_PASSWORD,
        },
      },
    }),
  ],
  pages: {
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
});
