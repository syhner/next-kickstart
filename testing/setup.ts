import 'vitest-dom/extend-expect';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

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
