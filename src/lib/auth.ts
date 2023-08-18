// import { DrizzleAdapter } from '@auth/drizzle-adapter';
// import NextAuth from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
// import { env } from '~/env';
// import { db } from './db';

// export const {
//   handlers: { GET, POST },
//   auth,
// } = NextAuth({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     GithubProvider({
//       clientId: env.AUTH_GITHUB_ID,
//       clientSecret: env.AUTH_GITHUB_SECRET,
//     }),
//   ],
// });

// export async function getSessionUser() {
//   const session = await auth();
//   return session?.user;
// }
