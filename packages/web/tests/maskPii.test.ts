import { describe, it, expect } from 'vitest';
import { maskPii } from '@empathy/shared';

describe('maskPii', () => {
  it('masks email addresses', () => {
    expect(maskPii('my email test@example.com')).toBe('my email [masked]');
  });
});
