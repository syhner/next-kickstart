import * as context from 'next/headers';
import { redirect } from 'next/navigation';
import { Logout } from '~/components/auth';
import { auth } from '~/lib/auth';

export default async function Page() {
  const authRequest = auth.handleRequest('GET', context);
  const session = await authRequest.validate();
  if (!session) redirect('/auth/login');

  return (
    <>
      <p>GitHub username: {session.user.github_username}</p>
      <Logout />
    </>
  );
}
