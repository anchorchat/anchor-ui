/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Badge from '../../src/badge';
import getStyles from '../../src/badge/get-styles';

chai.use(sinonChai);

describe('Badge', () => {
  const props = {
    value: 1,
    maxValue: 2,
    style: { root: true },
    inverted: false,
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a span element', () => {
    const wrapper = shallow(<Badge {...props} />).dive().dive();

    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should pass the content prop to the span element if the value prop is not greater than the maxValue prop', () => {
    const wrapper = shallow(<Badge {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<span>{1}</span>)).to.equal(true);
  });

  it('should pass the content prop to the span element if the value prop is greater than the maxValue prop', () => {
    props.value = 3;
    const wrapper = shallow(<Badge {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<span>2+</span>)).to.equal(true);
    props.value = 1;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Badge {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.color, props.inverted, props.style);
  });
});
