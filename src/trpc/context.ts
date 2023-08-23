import type { inferAsyncReturnType } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

/**
 * @enable NextAuth
 */
// import { auth } from '~/lib/auth';

export async function createContext(opts?: FetchCreateContextFnOptions) {
  /**
   * Remove the other return statement after enabling
   * @enable NextAuth
   */
  // const session = await auth();
  // return { session };

  return { session: { user: null } };
}

export type Context = inferAsyncReturnType<typeof createContext>;
