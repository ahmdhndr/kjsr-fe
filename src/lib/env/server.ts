import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

export const envServer = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    UPLOADTHING_TOKEN: z.string(),
    AUTH_SECRET: z.string(),
    // AUTH_GOOGLE_ID: z.string(),
    // AUTH_GOOGLE_SECRET: z.string(),
    // DB_HOST: z.string(),
    // DB_USER: z.string(),
    // DB_PASSWORD: z.string(),
    // DB_NAME: z.string(),
    // DB_PORT: z.coerce.number(),
    DATABASE_URL: z.string().url(),
    AUTH_RESEND_KEY: z.string(),
    EMAIL_FROM: z.string(),
    EMAIL_SERVER_HOST: z.string(),
    EMAIL_SERVER_USER: z.string(),
    EMAIL_SERVER_PASSWORD: z.string(),
    EMAIL_SERVER_PORT: z.coerce.number(),
    EMAIL_SERVER_HTTP_PORT: z.coerce.number(),
  },
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
