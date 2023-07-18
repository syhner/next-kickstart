import { ServerRuntime } from 'next';

export const runtime: ServerRuntime = 'edge';

export { GET, POST } from '~/lib/auth';
