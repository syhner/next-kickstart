import 'server-only';

import { ServerRuntime } from 'next';
import { httpBatchLink } from '@trpc/client';
import getBaseUrl from '~/util/getBaseUrl';
import { appRouter } from './routers';

export const runtime: ServerRuntime = 'edge';

export const trpcCaller = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
