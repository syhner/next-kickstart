'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { useEvent } from '~/hooks/useEvent';
import { trpcReact } from '~/trpc/trpc-react';

const formSchema = z.object({
  message: z
    .string()
    .min(2, {
      message: 'Message must be at least 2 characters',
    })
    .max(50, {
      message: 'Message must be not exceed 50 characters',
    }),
});

export default function Page() {
  const [messages, setMessages] = useState<string[]>([]);
  const addMessage = trpcReact.message.useMutation();

  useEvent({
    channelName: 'websockets',
    eventName: 'message',
    onEvent: (event) => {
      setMessages([event.message].concat(messages));
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addMessage.mutate({ message: values.message });
  };

  return (
    <div className='mx-24 mt-12'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='inline'>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='max-w-sm'
                    placeholder='Your message...'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Send</Button>
        </form>
      </Form>
      <div className='mt-6'>
        {messages.map((message, idx) => (
          <p key={idx}>{message}</p>
        ))}
      </div>
    </div>
  );
}
