/* eslint-disable no-process-env */
// @ts-check

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  skipValidation: process.env.CI === 'true',
  /**
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {},
  /**
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    ANALYZE: z.coerce.boolean().default(false),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(32),
  },
  /**
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    /**
     * Client
     */
    /**
     * Server
     */
    ANALYZE: process.env.ANALYZE,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
});
