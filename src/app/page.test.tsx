// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Page from './page';

describe('homepage', () => {
  it('renders the "Get started by editing" text', () => {
    render(<Page />);

    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });
});
