/**
 * @enable LuciaAuth
 */
// import { cookies } from 'next/headers';
// import { NextRequest } from 'next/server';
// import { generateState } from 'arctic';
// import { env } from '~/env.mjs';
// import { AuthProvider, github } from '~/lib/auth';
//
// export async function GET(
//   request: NextRequest,
//   {
//     params,
//   }: {
//     params: { provider: LooseAutoComplete<AuthProvider> };
//   }
// ): Promise<Response> {
//   const state = generateState();
//
//   const handleProvider = (url: URL) => {
//     cookies().set(`${params.provider}_oauth_state`, state, {
//       path: '/',
//       secure: env.NODE_ENV === 'production',
//       httpOnly: true,
//       maxAge: 60 * 10,
//       sameSite: 'lax',
//     });
//     return Response.redirect(url.toString());
//   };
//
//   switch (params.provider) {
//     case 'github':
//       const url = await github.createAuthorizationURL(state);
//       return handleProvider(url);
//     default:
//       type AssertAllAuthProvidersHandled = Expect<
//         Equal<typeof params.provider, Omit<string, AuthProvider>>
//       >;
//       return new Response('Unsupported OAuth provider', { status: 400 });
//   }
// }
