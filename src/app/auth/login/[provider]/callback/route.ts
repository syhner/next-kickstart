/**
 * @enable LuciaAuth
 */
// import { cookies, headers } from 'next/headers';
// import type { NextRequest } from 'next/server';
// import { OAuthRequestError } from '@lucia-auth/oauth';
// import { User } from 'lucia';
// import { auth, AuthProvider, authRedirects, githubAuth } from '~/lib/auth';
//
// export const GET = async (
//   request: NextRequest,
//   {
//     params,
//   }: {
//     params: {
//       provider: LooseAutoComplete<AuthProvider>;
//     };
//   }
// ) => {
//   const url = new URL(request.url);
//   const state = url.searchParams.get('state');
//   const code = url.searchParams.get('code');
//   const storedState = cookies().get(`${params.provider}_oauth_state`)?.value;
//   // Validate state
//   if (!storedState || !state || storedState !== state || !code) {
//     return new Response(null, {
//       status: 400,
//     });
//   }
//
//   const handleLogin = async (user: User) => {
//     const session = await auth.createSession({
//       userId: user.userId,
//       attributes: {},
//     });
//
//     const authRequest = auth.handleRequest(request.method, {
//       cookies,
//       headers,
//     });
//     authRequest.setSession(session);
//
//     return new Response(null, {
//       status: 302,
//       headers: {
//         Location: authRedirects.afterLogin,
//       },
//     });
//   };
//
//   try {
//     switch (params.provider) {
//       case 'github':
//         const { getExistingUser, githubUser, createUser } =
//           await githubAuth.validateCallback(code);
//         const user =
//           (await getExistingUser()) ??
//           (await createUser({
//             attributes: { github_username: githubUser.login },
//           }));
//         return handleLogin(user);
//
//       default:
//         type AssertAllAuthProvidersHandled = Expect<
//           Equal<typeof params.provider, Omit<string, AuthProvider>>
//         >;
//         return new Response('Unsupported OAuth provider', { status: 400 });
//     }
//   } catch (e) {
//     console.error(e);
//     if (e instanceof OAuthRequestError) {
//       return new Response('Invalid code', { status: 400 });
//     }
//     return new Response(null, { status: 500 });
//   }
// };
