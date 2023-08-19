import matchers from '@testing-library/jest-dom/matchers';
import type { Assertion, AsymmetricMatchersContaining } from 'vitest';

type CustomMatchers = typeof matchers;

declare module 'vitest' {
  interface Assertion extends CustomMatchers {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
