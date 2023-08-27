/* eslint-disable no-process-env */

import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: '.env.local' });

const CI = z
  .enum(['true', 'false', '0', '1'])
  .transform((v) => v === 'true' || v === '1')
  .default('false')
  .parse(process.env.CI);

const baseURL = 'http://localhost:3000';

export default defineConfig({
  globalTimeout: CI ? 1000 * 60 * 10 : undefined,
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!CI,
  retries: CI ? 2 : 0,
  workers: CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  webServer: {
    command: 'pnpm run dev',
    url: baseURL,
    timeout: 1000 * 60 * 5,
    reuseExistingServer: !CI,
  },
});
