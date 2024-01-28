import 'vitest-dom/extend-expect';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

vi.mock('~/lib/auth', () => {
  const validateRequest = () => ({ session: null, user: null });
  return { validateRequest: { validateRequest } };
});

// Hooks are reset before each suite
afterEach(() => {
  cleanup();
});
