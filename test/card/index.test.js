/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Card from '../../src/card';
import getStyles from '../../src/card/get-styles';

chai.use(sinonChai);

describe('Card', () => {
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
    const wrapper = shallow(<Card {...props}>{children}</Card>).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should pass the value of the children prop to the section element', () => {
    const wrapper = shallow(<Card {...props}>{children}</Card>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Card {...props} >{children}</Card>).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });
});
