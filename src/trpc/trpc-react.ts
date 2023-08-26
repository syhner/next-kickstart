import 'client-only';

import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from './router';

export const trpcReact = createTRPCReact<AppRouter>({});
