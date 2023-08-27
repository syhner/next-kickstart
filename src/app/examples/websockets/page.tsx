'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { useEvent } from '~/hooks/useEvent';
import { trpcReact } from '~/trpc/trpc-react';

export default function Page() {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = trpcReact.message.useMutation();

  useEvent({
    channelName: 'websockets',
    eventName: 'message',
    onEvent: (event) => {
      setMessages([event.message].concat(messages));
    },
  });

  return (
    <div className='mx-24 mt-12'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage.mutate({ message: inputMessage });
          setInputMessage('');
        }}
      >
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder='Your message...'
          />
          <Button type='submit' disabled={inputMessage.length === 0}>
            Send
          </Button>
        </div>
      </form>

      <div className='mt-6'>
        {messages.map((message, idx) => (
          <p key={idx}>{message}</p>
        ))}
      </div>
    </div>
  );
}
