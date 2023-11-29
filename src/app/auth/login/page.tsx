import * as context from 'next/headers';
import { redirect } from 'next/navigation';
import { Login } from '~/components/auth';
import { auth, authRedirects } from '~/lib/auth';

/**
 * @enable LuciaAuth
 */
// export default async function Page() {
//   const authRequest = auth.handleRequest('GET', context);
//   const session = await authRequest.validate();
//   if (session) redirect(authRedirects.afterLogin);
//
//   return <Login provider='github'>Login with GitHub</Login>;
// }
