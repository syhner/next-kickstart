import { events, Events } from '~/lib/events';
import { t } from './init';
import { isAuthenticated } from './middleware/isAuthenticated';

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const authenticatedProcedure = t.procedure.use(isAuthenticated);

type EventOptions<T> = {
  procedure: typeof t.procedure;
  channel: string;
  event: T;
};

export const triggerEvent = <T extends keyof Events>(
  eventOptions: EventOptions<T>
) => {
  const { procedure, channel, event } = eventOptions;
  const eventSchema = events[event];

  return procedure.input(eventSchema).mutation(async ({ input, ctx }) => {
    await ctx.eventServer.trigger(channel, event, input);
  });
};
