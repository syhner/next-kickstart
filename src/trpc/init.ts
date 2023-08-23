import { initTRPC } from '@trpc/server';
import { Context } from './context';
import { transformer } from './transformer';

export const t = initTRPC.context<Context>().create({ transformer });
