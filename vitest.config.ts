import path from 'path';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import { defineConfig } from 'vitest/config';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './testing/setup.ts',
    exclude: ['node_modules', 'e2e'],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
});
