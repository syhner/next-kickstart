import { inferReactQueryProcedureOptions } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs, initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { type AppRouter } from './routers';

const t = initTRPC.create({ transformer: superjson });

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
