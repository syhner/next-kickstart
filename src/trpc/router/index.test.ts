import { expect, it, test } from 'bun:test';
import { appRouter } from '.';
import { createContext } from '../init';

test('health check', async () => {
  const trpcCaller = appRouter.createCaller(await createContext());

  it('responds with ok', async () => {
    const health = await trpcCaller.health();
    expect(health).toEqual('ok');
  });
});
