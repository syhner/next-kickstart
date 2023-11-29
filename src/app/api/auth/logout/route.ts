/**
 * @enable LuciaAuth
 */
// import * as context from 'next/headers';
// import type { NextRequest } from 'next/server';
// import { auth, authRedirects } from '~/lib/auth';
//
// export const POST = async (request: NextRequest) => {
//   const authRequest = auth.handleRequest(request.method, context);
//
//   // Check if user is authenticated
//   const session = await authRequest.validate();
//   if (!session) {
//     return new Response(null, { status: 401 });
//   }
//
//   // Invalidate the current session
//   await auth.invalidateSession(session.sessionId);
//
//   // Delete session cookie
//   authRequest.setSession(null);
//   return new Response(null, {
//     status: 302,
//     headers: { Location: authRedirects.afterLogout },
//   });
// };
