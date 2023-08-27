/**
 * @enable Pusher
 */
// import { pusherServer } from '~/lib/event-server';

import { events, Events } from '~/lib/events';
import { t } from './init';
import { isAuthenticated } from './middleware/isAuthenticated';

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const authenticatedProcedure = t.procedure.use(isAuthenticated);

export const triggerEvent = <T extends keyof Events>({
  procedure,
  channel,
  event,
}: {
  procedure: typeof t.procedure;
  channel: string;
  event: T;
}) =>
  procedure.input(events[event]).mutation(async (opts) => {
    const parsedEvent = opts.input;
    /**
     * @enable Pusher
     */
    // await pusherServer.trigger(channel, event, parsedEvent);
  });
