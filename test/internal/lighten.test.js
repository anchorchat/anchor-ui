/* eslint-env mocha */
import { expect } from 'chai';
import lighten from '../../src/internal/lighten';

describe('lighten', () => {
  it('should lighten color', () => {
    const lightendColor = 'hsl(0, 0%, 12%)';

    expect(lighten('#121212', 0.7)).to.equal(lightendColor);
  });
});
