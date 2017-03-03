/* eslint-env mocha */
import { expect } from 'chai';
import darken from '../../src/internal/darken';

describe('darken', () => {
  it('should darken color', () => {
    const darkendColor = 'hsl(0, 0%, 50%)';

    expect(darken('#FFFFFF', 0.5)).to.equal(darkendColor);
  });
});
