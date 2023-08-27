import { trpcCaller } from '~/trpc/trpc-caller';

export default async function Page() {
  const health = await trpcCaller.health();

  return <div>{`health: ${health}`}</div>;
}
