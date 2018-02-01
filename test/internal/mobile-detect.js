/* eslint-env mocha */
import { expect } from 'chai';
import MobileDetect from 'mobile-detect';
import md from '../../src/internal/mobile-detect';

describe('MobileDetect', () => {
  beforeEach(() => {
    global.window = {};
  });

  afterEach(() => {
    delete global.window;
  });

  it('should return an instance of MobileDetect', () => {
    expect(md).to.be.an.instanceof(MobileDetect);
  });
});
