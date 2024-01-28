/**
 * @enable LuciaAuth
 */
// import { cookies } from 'next/headers';
// import { OAuth2RequestError } from 'arctic';
// import { generateId } from 'lucia';
// import { z } from 'zod';
// import { users } from '~/db/schemas/auth';
// import { authRedirects, github, lucia } from '~/lib/auth';
// import { db } from '~/lib/db';
//
// const githubUserSchema = z.object({
//   id: z.string(),
//   login: z.string(),
// });
//
// export async function GET(request: Request): Promise<Response> {
//   const url = new URL(request.url);
//   const code = url.searchParams.get('code');
//   const state = url.searchParams.get('state');
//   const storedState = cookies().get('github_oauth_state')?.value ?? null;
//   if (!code || !state || !storedState || state !== storedState) {
//     return new Response(null, { status: 400 });
//   }
//
//   try {
//     const tokens = await github.validateAuthorizationCode(code);
//     const githubUserResponse = await fetch('https://api.github.com/user', {
//       headers: { Authorization: `Bearer ${tokens.accessToken}` },
//     });
//     const githubUser = githubUserSchema.parse(await githubUserResponse.json());
//     const existingUser = await db.query.users.findFirst({
//       where: (users, { eq }) => eq(users.githubId, githubUser.id),
//     });
//
//     if (existingUser) {
//       const session = await lucia.createSession(existingUser.id, {});
//       const sessionCookie = lucia.createSessionCookie(session.id);
//       cookies().set(
//         sessionCookie.name,
//         sessionCookie.value,
//         sessionCookie.attributes
//       );
//       return new Response(null, {
//         status: 302,
//         headers: { Location: authRedirects.afterLogin },
//       });
//     }
//
//     const userId = generateId(15);
//     await db.insert(users).values({
//       id: userId,
//       githubId: githubUser.id,
//     });
//     const session = await lucia.createSession(userId, {});
//     const sessionCookie = lucia.createSessionCookie(session.id);
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );
//     return new Response(null, {
//       status: 302,
//       headers: { Location: authRedirects.afterLogin },
//     });
//   } catch (e) {
//     // the specific error message depends on the provider
//     if (e instanceof OAuth2RequestError) {
//       // invalid code
//       return new Response(null, {
//         status: 400,
//       });
//     }
//     return new Response(null, {
//       status: 500,
//     });
//   }
// }
