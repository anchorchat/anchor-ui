/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CardContent from '../../src/card-content';
import getStyles from '../../src/card-content/get-styles';

chai.use(sinonChai);

describe('CardContent', () => {
  const props = {
    style: { root: true }
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

  it('should render children', () => {
    const wrapper = shallow(<CardContent {...props}>{children}</CardContent>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardContent {...props} >{children}</CardContent>).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });
});
