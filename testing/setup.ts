import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect, vi } from 'vitest';

expect.extend(matchers);

vi.mock('next-auth', () => {
  const auth = () => ({ user: null });
  return {
    default: () => ({
      auth,
      handlers: {},
    }),
  };
});

// Hooks are reset before each suite
afterEach(() => {
  cleanup();
});
