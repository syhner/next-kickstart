import 'server-only';

import { createContext } from './init';
import { appRouter } from './router';

export const trpcCaller = appRouter.createCaller(await createContext());
