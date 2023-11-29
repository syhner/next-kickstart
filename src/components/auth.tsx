'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider } from '~/lib/auth';
import { Button } from './ui/button';

export const Login = ({
  provider,
  children,
}: {
  provider: AuthProvider;
  children?: ReactNode;
}) => (
  <Button asChild>
    <a href={`/auth/login/${provider}`}>{children}</a>
  </Button>
);

export const Logout = () => {
  const router = useRouter();
  return (
    <form
      action='/api/auth/logout'
      method='post'
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          body: formData,
          redirect: 'manual',
        });

        if (response.status === 0) {
          // Redirected
          // When using `redirect: "manual"`, response status 0 is returned
          return router.refresh();
        }
      }}
    >
      <Button type='submit'>Logout</Button>
    </form>
  );
};
