import { ServerRuntime } from 'next';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '~/trpc/init';
import { appRouter } from '~/trpc/router';

export const runtime: ServerRuntime = 'edge';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };
