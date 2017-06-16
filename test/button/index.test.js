/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Button from '../../src/button';
import getStyles from '../../src/button/get-styles';

chai.use(sinonChai);

describe('Button', () => {
  const props = {
    onClick: null,
    style: { root: true },
    iconButton: false,
    inverted: false,
    disabled: false,
    flatButton: false,
    color: '#1BA6C4'
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a button element', () => {
    const wrapper = shallow(<Button {...props}>{children}</Button>).dive();

    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Button {...props}>{children}</Button>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Button {...props}>{children}</Button>).dive();
    expect(spy).to.have.been.calledWith(
      props.color, props.inverted, props.iconButton, props.disabled, props.flatButton, props.style
    );
  });
});
