import { z } from 'zod';

export const events = {
  message: z.object({ message: z.string() }),
};

export type Events = {
  [K in keyof typeof events]: z.infer<(typeof events)[K]>;
};
