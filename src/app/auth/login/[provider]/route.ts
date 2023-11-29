import * as context from 'next/headers';
import type { NextRequest } from 'next/server';
import { Equal } from 'drizzle-orm';
import { env } from '~/env.mjs';
import { AuthProvider } from '~/lib/auth';

/**
 * Remove the other import from '~/lib/auth' after enabling
 * @enable LuciaAuth
 */
// import { AuthProvider, githubAuth } from '~/lib/auth';

export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      provider: LooseAutoComplete<AuthProvider>;
    };
  }
) => {
  const storeState = (url: URL, state: string) => {
    context.cookies().set(`${params.provider}_oauth_state`, state, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60,
    });

    return new Response(null, {
      status: 302,
      headers: { Location: url.toString() },
    });
  };

  switch (params.provider) {
    case 'github':
    /**
     * @enable LuciaAuth
     */
    // const [url, state] = await githubAuth.getAuthorizationUrl();
    // return storeState(url, state);
    default:
      type AssertAllAuthProvidersHandled = Expect<
        Equal<typeof params.provider, Omit<string, AuthProvider>>
      >;
      return new Response('Unsupported OAuth provider', { status: 400 });
  }
};
