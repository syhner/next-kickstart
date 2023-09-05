import { createTrpcCaller } from '~/trpc/trpc-caller';

export default async function Page() {
  const trpcCaller = await createTrpcCaller();
  const health = trpcCaller.health();

  return <div>{`health: ${health}`}</div>;
}
