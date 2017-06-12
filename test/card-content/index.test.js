/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CardContent from '../../src/card-content';
import getStyles from '../../src/alert/get-styles';

chai.use(sinonChai);

describe('card-content', () => {
  const props = {
    style: {}
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<CardContent {...props}>{children}</CardContent>).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardContent {...props} />, { context: { color: 'red' } }).dive().dive();
    expect(spy).to.have.been.calledWith(props.style);
  });
});
