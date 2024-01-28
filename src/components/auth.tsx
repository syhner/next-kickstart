/**
 * @enable LuciaAuth
 */
// import { ReactNode } from 'react';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// import {
//   AuthProvider,
//   authRedirects,
//   lucia,
//   validateRequest,
// } from '~/lib/auth';
// import { Button } from './ui/button';
//
// export const Login = ({
//   provider,
//   children = `Sign in with ${provider}`,
// }: {
//   provider: AuthProvider;
//   children?: ReactNode;
// }) => (
//   <Button asChild>
//     <a href={`/api/auth/login/${provider}`}>{children}</a>
//   </Button>
// );
//
// export const Logout = ({ children = 'Sign out' }: { children?: ReactNode }) => {
//   async function logout() {
//     'use server';
//     const { session } = await validateRequest();
//     if (!session) return { error: 'Unauthorized' };
//
//     await lucia.invalidateSession(session.id);
//
//     const sessionCookie = lucia.createBlankSessionCookie();
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );
//     return redirect(authRedirects.afterLogout);
//   }
//
//   return (
//     <form action={logout}>
//       <Button>{children}</Button>
//     </form>
//   );
// };
