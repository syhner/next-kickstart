'use client';

import { trpcReact } from '~/trpc/trpc-react';

export default function Page() {
  const health = trpcReact.health.useQuery().data;

  return <div>{`health: ${health}`}</div>;
}
