'use client';

import { signIn, signOut } from 'next-auth/react';

export function SignIn({ provider, ...props }: any) {
  return <button {...props} onClick={() => signIn(provider)} />;
}

export function SignOut(props: any) {
  return <button {...props} onClick={() => signOut()} />;
}
