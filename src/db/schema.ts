import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const views = pgTable('views', {
  slug: text('slug').primaryKey(),
  count: integer('count').notNull(),
});

export type Views = typeof views.$inferSelect;
