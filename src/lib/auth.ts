import { cache } from 'react';
import { cookies } from 'next/headers';
import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { GitHub } from 'arctic';
import { Lucia } from 'lucia';
import type { Session, User } from 'lucia';
import { sessions, users } from '~/db/schemas/auth';
import { env } from '~/env.mjs';

/**
 * @enable Drizzle
 */
// import { db } from './db';

/**
 * @enable LuciaAuth
 */
// const adapter = new DrizzleMySQLAdapter(db, sessions, users);
//
// export const lucia = new Lucia(adapter, {
//   sessionCookie: {
//     // This sets cookies with super long expiration since Next.js doesn't
//     // allow Lucia to extend cookie expiration when rendering pages
//     expires: false,
//     attributes: {
//       secure: env.NODE_ENV === 'production', // `true` when using HTTPS
//     },
//   },
//   getUserAttributes: (attributes) => {
//     return {
//       githubId: attributes.githubId,
//     };
//   },
// });
//
// export const validateRequest = cache(
//   async (): Promise<
//     { user: User; session: Session } | { user: null; session: null }
//   > => {
//     const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
//     if (!sessionId) {
//       return { user: null, session: null };
//     }
//
//     const result = await lucia.validateSession(sessionId);
//     // Next.js throws when you attempt to set cookie when rendering page
//     try {
//       if (result.session && result.session.fresh) {
//         const sessionCookie = lucia.createSessionCookie(result.session.id);
//         cookies().set(
//           sessionCookie.name,
//           sessionCookie.value,
//           sessionCookie.attributes
//         );
//       }
//       if (!result.session) {
//         const sessionCookie = lucia.createBlankSessionCookie();
//         cookies().set(
//           sessionCookie.name,
//           sessionCookie.value,
//           sessionCookie.attributes
//         );
//       }
//     } catch {}
//     return result;
//   }
// );
//
// export const github = new GitHub(env.AUTH_GITHUB_ID, env.AUTH_GITHUB_SECRET);
//
// declare module 'lucia' {
//   interface Register {
//     Lucia: typeof lucia;
//     DatabaseUserAttributes: Omit<typeof users._.model.select, 'id'>;
//   }
// }

const authProviders = [
  /**
   * @enable LuciaAuth
   */
  'github',
] as const;
export type AuthProvider = (typeof authProviders)[number];

export const authRedirects = {
  afterLogin: '/examples/profile',
  afterLogout: '/examples/profile',
} as const;
