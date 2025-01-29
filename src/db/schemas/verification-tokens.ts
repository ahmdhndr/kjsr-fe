import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

const verificationToken = pgTable("verificationToken", {
  token: text("token").primaryKey(),
  identifier: varchar("identifier", { length: 320 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export default verificationToken;
