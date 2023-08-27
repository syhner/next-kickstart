// @vitest-environment edge-runtime

import { expect, it, test } from 'vitest';
import { appRouter } from '.';
import { createContext } from '../init';

test('health check', async () => {
  const trpcCaller = appRouter.createCaller(await createContext());

  it('responds with ok', async () => {
    const health = await trpcCaller.health();
    expect(health).toEqual('ok');
  });
});
