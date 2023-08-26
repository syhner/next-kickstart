import { ServerRuntime } from 'next';
import { trpcCaller } from '~/trpc/trpc-caller';

export const runtime: ServerRuntime = 'edge';

export default async function Page() {
  const health = await trpcCaller.health();

  return <div>{`health: ${health}`}</div>;
}
