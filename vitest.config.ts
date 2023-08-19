import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './testing/setup.ts',
    exclude: ['node_modules', 'e2e'],
  },
});
