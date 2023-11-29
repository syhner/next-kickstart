import 'vitest-dom/extend-expect';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

vi.mock('~/lib/auth', () => {
  const validate = () => ({ user: null });
  const handleRequest = () => ({ validate });
  return { auth: { handleRequest } };
});

// Hooks are reset before each suite
afterEach(() => {
  cleanup();
});
