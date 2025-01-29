import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { envServer } from "@/lib/env/server";

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(envServer.DATABASE_URL, { prepare: false });
export const db = drizzle({ client });
