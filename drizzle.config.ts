/* eslint-disable no-process-env */

import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import { z } from 'zod';

dotenv.config({ path: '.env.local' });

export default {
  schema: './src/db/schemas/*.ts',
  out: './src/db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: z.string().parse(process.env.DATABASE_URL),
  },
} satisfies Config;
