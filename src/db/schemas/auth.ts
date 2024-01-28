import { relations } from 'drizzle-orm';
import { datetime, mysqlTableCreator, varchar } from 'drizzle-orm/mysql-core';
import { env } from '../../env.mjs';

const mysqlTable = mysqlTableCreator((name) => `${env.DATABASE_PREFIX}${name}`);

export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
  githubId: varchar('github_id', { length: 255 }).notNull(),
  // other user attributes
});

export const sessions = mysqlTable('sessions', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  expiresAt: datetime('expires_at').notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
