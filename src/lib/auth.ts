import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { env } from '~/env.mjs';

// export const {
//   handlers: { GET, POST },
//   auth,
// } = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: env.AUTH_GITHUB_ID,
//       clientSecret: env.AUTH_GITHUB_SECRET,
//     }),
//   ],
// });
