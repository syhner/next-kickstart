import { relations } from 'drizzle-orm';
import { bigint, mysqlTableCreator, varchar } from 'drizzle-orm/mysql-core';
import { env } from '../../env.mjs';

const mysqlTable = mysqlTableCreator((name) => `${env.DATABASE_PREFIX}${name}`);

export const tableNames = {
  users: 'users',
  keys: 'keys',
  sessions: 'sessions',
} as const;

export const users = mysqlTable(tableNames.users, {
  id: varchar('id', { length: 15 }).primaryKey(), // change length when using custom user ids
  githubUsername: varchar('github_username', { length: 39 }),
  // other user attributes
});

export const keys = mysqlTable(tableNames.keys, {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 15 }).notNull(),
  hashedPassword: varchar('hashed_password', { length: 255 }),
});

export const keysRelations = relations(keys, ({ one }) => ({
  user: one(users, {
    fields: [keys.userId],
    references: [users.id],
  }),
}));

export const sessions = mysqlTable(tableNames.sessions, {
  id: varchar('id', { length: 128 }).primaryKey(),
  userId: varchar('user_id', { length: 15 }).notNull(),
  activeExpires: bigint('active_expires', { mode: 'number' }).notNull(),
  idleExpires: bigint('idle_expires', { mode: 'number' }).notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

type UserColumns = typeof users._.columns;

export type UserAttributes = Omit<
  {
    [K in keyof UserColumns as UserColumns[K]['_']['notNull'] extends true
      ? UserColumns[K]['_']['name']
      : never]: UserColumns[K]['_']['data'];
  } & {
    [K in keyof UserColumns as UserColumns[K]['_']['notNull'] extends true
      ? never
      : UserColumns[K]['_']['name']]?: UserColumns[K]['_']['data'];
  },
  'id'
>;
