import 'client-only';

import { useEffect, useRef } from 'react';
import PusherClient from 'pusher-js';
import { env } from '~/env.mjs';
import { events, type Events } from '~/lib/events';

export const useEvent = <T extends keyof typeof events>({
  channelName,
  eventName,
  onEvent,
}: {
  channelName: string;
  eventName: T;
  onEvent: (event: Events[T]) => unknown;
}) => {
  const onEventRef = useRef(onEvent);

  useEffect(() => {
    onEventRef.current = onEvent;
  }, [onEvent]);

  useEffect(() => {
    /**
     * @enable WebSockets
     */
    // const pusherClient = new PusherClient(env.NEXT_PUBLIC_PUSHER_APP_KEY, {
    //   cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
    // });
    //
    // const channel = pusherClient.subscribe(channelName);
    // channel.bind(eventName, (event: unknown) => {
    //   onEventRef.current(event as Events[T]);
    // });

    return () => {
      /**
       * @enable WebSockets
       */
      // channel.unbind(eventName);
      // pusherClient.unsubscribe(channelName);
    };
  }, [channelName, eventName]);
};
