import { planetscale } from '@lucia-auth/adapter-mysql';
import { github } from '@lucia-auth/oauth/providers';
import { lucia } from 'lucia';
import { nextjs_future } from 'lucia/middleware';
import { tableNames } from '~/db/schemas/auth';
import { env } from '~/env.mjs';

/**
 * @enable Drizzle
 */
// import { connection } from './db';

/**
 * @enable LuciaAuth
 */
// export const auth = lucia({
//   env: env.NODE_ENV === 'production' ? 'PROD' : 'DEV',
//   middleware: nextjs_future(),
//   sessionCookie: { expires: false },
//
//   adapter: planetscale(connection, {
//     user: `${env.DATABASE_PREFIX}${tableNames.users}`,
//     key: `${env.DATABASE_PREFIX}${tableNames.keys}`,
//     session: `${env.DATABASE_PREFIX}${tableNames.sessions}`,
//   }),
//
//   getUserAttributes: (data) => {
//     // id is not needed since user attributes will have userId
//     return data as Omit<typeof data, 'id'>;
//   },
// });
//
// export type Auth = typeof auth;
//
// export const githubAuth = github(auth, {
//   clientId: env.AUTH_GITHUB_ID,
//   clientSecret: env.AUTH_GITHUB_SECRET,
// });

const authProviders = [
  /**
   * @enable LuciaAuth
   */
  // 'github',
] as const;
export type AuthProvider = (typeof authProviders)[number];

export const authRedirects = {
  afterLogin: '/examples/profile',
  afterLogout: '/auth/login',
} as const;
