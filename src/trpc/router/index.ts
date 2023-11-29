import { inferReactQueryProcedureOptions } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import {
  authenticatedProcedure,
  publicProcedure,
  router,
  triggerEvent,
} from '../methods';

export const appRouter = router({
  health: publicProcedure.query(() => 'ok'),

  message: triggerEvent({
    procedure: publicProcedure,
    channel: 'websockets',
    event: 'message',
  }),

  profile: authenticatedProcedure.query((opts) => ({
    /**
     * @enable LuciaAuth
     */
    // github_username: opts.ctx.session.user.github_username,
  })),
});

export type AppRouter = typeof appRouter;
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
