import { TRPCError } from '@trpc/server';
import { t } from '../init';

export const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      // Infers that the `session` is non-nullable
      session: ctx.session,
    },
  });
});
