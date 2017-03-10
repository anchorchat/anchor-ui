/* eslint-env mocha */
import { expect } from 'chai';
import fade from '../../src/internal/fade';

describe('fade', () => {
  it('should fade color', () => {
    const fadedColor = 'rgba(18, 18, 18, 0.5)';

    expect(fade('#121212', 0.5)).to.equal(fadedColor);
  });
});
