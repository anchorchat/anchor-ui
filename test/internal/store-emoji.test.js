/* eslint-env mocha */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import store from 'store';
import times from 'lodash/times';
import last from 'lodash/last';
import Chance from 'chance';
import storeEmoji from '../../src/internal/store-emoji';

const chance = Chance();

chai.use(sinonChai);

describe('storeEmoji', () => {
  afterEach(() => {
    store.get.restore();
    store.set.restore();
  });

  it('should create array with passed emoji', () => {
    let storage;
    const get = sinon.stub(store, 'get').callsFake(() => storage);
    const set = sinon.stub(store, 'set').callsFake((key, item) => { storage = item; });
    const emoji = { name: 'grinning face', shortname: ':grinning:' };

    storeEmoji(emoji);

    expect(get).to.have.been.calledWith('recent-emoji');
    expect(set).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(storage).to.deep.equal([emoji]);
  });

  it('should add emoji to array', () => {
    let storage = [{ name: 'thinking face', shortname: ':thinking:' }];
    const get = sinon.stub(store, 'get').callsFake(() => storage);
    const set = sinon.stub(store, 'set').callsFake((key, item) => { storage = item; });
    const emoji = { name: 'grinning face', shortname: ':grinning:' };

    storeEmoji(emoji);

    expect(get).to.have.been.calledWith('recent-emoji');
    expect(set).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(storage).to.deep.equal([emoji, { name: 'thinking face', shortname: ':thinking:' }]);
  });

  it('should place emoji first in array', () => {
    let storage = [{ name: 'thinking face', shortname: ':thinking:' }, { name: 'grinning face', shortname: ':grinning:' }];
    const get = sinon.stub(store, 'get').callsFake(() => storage);
    const set = sinon.stub(store, 'set').callsFake((key, item) => { storage = item; });
    const emoji = { name: 'grinning face', shortname: ':grinning:' };

    storeEmoji(emoji);

    expect(get).to.have.been.calledWith('recent-emoji');
    expect(set).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(storage).to.deep.equal([emoji, { name: 'thinking face', shortname: ':thinking:' }]);
  });

  it('should remove last emoji from array', () => {
    let storage = times(
      42,
      () => ({ name: chance.string({ length: 20 }), shortname: chance.string({ length: 20 }) })
    );
    const get = sinon.stub(store, 'get').callsFake(() => storage);
    const set = sinon.stub(store, 'set').callsFake((key, item) => { storage = item; });
    const emoji = { name: 'grinning face', shortname: ':grinning:' };

    const lastEmoji = last(storage);
    storeEmoji(emoji);

    expect(get).to.have.been.calledWith('recent-emoji');
    expect(set).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(storage).to.have.lengthOf(42);
    expect(last(storage)).to.not.equal(lastEmoji);
  });
});
