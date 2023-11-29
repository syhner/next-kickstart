import * as context from 'next/headers';
import { initTRPC } from '@trpc/server';
import type { inferAsyncReturnType } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { env } from '~/env.mjs';
import { auth } from '~/lib/auth';
import { transformer } from './transformer';

/**
 * @enable WebSockets
 */
// import Pusher from 'pusher-http-edge';

/**
 * @enable LuciaAuth
 */
// import { auth } from '~/lib/auth';

export async function createContext(opts?: FetchCreateContextFnOptions) {
  /**
   * Remove the other `session` declaration after enabling
   * @enable LuciaAuth
   */
  const authRequest = auth.handleRequest('GET', context);
  const session = await authRequest.validate();
  // const session = { user: null };

  /**
   * Remove the other `eventServer` declaration after enabling
   * @enable WebSockets
   */
  // const eventServer = new Pusher({
  //   appId: env.PUSHER_APP_ID,
  //   key: env.NEXT_PUBLIC_PUSHER_APP_KEY,
  //   secret: env.PUSHER_SECRET,
  //   cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
  //   useTLS: true,
  // });
  const eventServer = { trigger: async (...args: unknown[]) => {} };

  return { eventServer, session };
}

export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create({ transformer });
