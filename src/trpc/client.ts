import 'client-only';

import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from './routers';

export const trpc = createTRPCReact<AppRouter>({});
