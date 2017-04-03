/* eslint-env mocha */
import { expect } from 'chai';
import getPercentage from '../../src/internal/get-percentage';

describe('getPercentage', () => {
  it('should return 0 if percentage isNaN', () => {
    const percentage = getPercentage();

    expect(percentage).to.equal(0);
  });

  it('should return percentage', () => {
    const percentage = getPercentage(5, 0, 10);

    expect(percentage).to.equal(0.5);
  });
});
