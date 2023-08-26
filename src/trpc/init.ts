import { initTRPC } from '@trpc/server';
import type { inferAsyncReturnType } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { transformer } from './transformer';

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

export const t = initTRPC.context<Context>().create({ transformer });
