import 'server-only';

import { createContext } from './init';
import { appRouter } from './router';

export const createTrpcCaller = async () => {
  return appRouter.createCaller(await createContext());
};
