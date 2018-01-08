/* eslint-env mocha */
import { expect } from 'chai';
import MobileDetect from 'mobile-detect';

describe('MobileDetect', () => {
  beforeEach(() => {
    global.window = {};
  });

  afterEach(() => {
    delete global.window;
  });

  it('should return an instance of MobileDetect', () => {
    const md = require('../../src/internal/mobile-detect'); // eslint-disable-line global-require

    expect(md).to.be.an.instanceof(MobileDetect);
  });
});
