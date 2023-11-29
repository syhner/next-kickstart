/* eslint-disable no-process-env */
// @ts-check

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const toggle = z
  .enum(['true', 'false', '0', '1'])
  .transform((v) => v === 'true' || v === '1');

export const env = createEnv({
  skipValidation: process.env.CI === 'true',
  /**
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    /**
     * @enable WebSockets
     */
    // NEXT_PUBLIC_PUSHER_APP_KEY: z.string().min(1),
    // NEXT_PUBLIC_PUSHER_CLUSTER: z.string().min(1),
  },
  /**
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    ANALYZE: toggle.default('false'),

    /**
     * @enable LuciaAuth
     */
    // AUTH_GITHUB_ID: z.string().min(1),
    // AUTH_GITHUB_SECRET: z.string().min(1),

    DATABASE_PREFIX: z.string().default(''),
    /**
     * @enable Drizzle
     */
    // DATABASE_URL: z.string().url(),

    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),

    /**
     * @enable WebSockets
     */
    // PUSHER_APP_ID: z.string().min(1),
    // PUSHER_SECRET: z.string().min(1),

    /**
     * Set PWA environment variable to true to enable PWA
     * (in env.local and/or deployment environment variables)
     * @enable PWA
     */
    PWA: toggle.default('false'),
  },
  /**
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    /**
     * ------
     * Client
     * ------
     */

    /**
     * @enable WebSockets
     */
    // NEXT_PUBLIC_PUSHER_APP_KEY: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    // NEXT_PUBLIC_PUSHER_CLUSTER: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,

    /**
     * ------
     * Server
     * ------
     */
    ANALYZE: process.env.ANALYZE,

    /**
     * @enable LuciaAuth
     */
    // AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    // AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,

    DATABASE_PREFIX: process.env.DATABASE_PREFIX,
    /**
     * @enable Drizzle
     */
    // DATABASE_URL: process.env.DATABASE_URL,

    NODE_ENV: process.env.NODE_ENV,

    /**
     * @enable WebSockets
     */
    // PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    // PUSHER_SECRET: process.env.PUSHER_SECRET,

    PWA: process.env.PWA,
  },
});
