import { envServer } from "@/lib/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "./src/db/migrations",
  schema: "./src/db/schemas/index.ts",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: envServer.DATABASE_URL,
  },
});