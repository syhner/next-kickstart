import 'server-only';

import { createContext } from './context';
import { appRouter } from './routers';

export const trpcCaller = appRouter.createCaller(await createContext());
