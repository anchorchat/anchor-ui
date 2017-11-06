/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Button from '../../src/button/component';
import getStyles from '../../src/button/get-styles';

chai.use(sinonChai);

describe('Button', () => {
  const props = {
    onClick: null,
    style: {},
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

  it('should be an instanceOf Button', () => {
    const component = shallow(<Button {...props}>{children}</Button>);

    expect(component.find('button').exists()).to.equal(true);
  });

  it('should render children', () => {
    const component = shallow(<Button {...props}>{children}</Button>);

    expect(component.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should call button onClick function', () => {
    const spy = sinon.spy();
    props.onClick = spy;
    const component = shallow(<Button {...props}>{children}</Button>);

    component.find('button').simulate('click');
    expect(spy).to.have.callCount(1);
    props.hideAlert = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Button {...props}>{children}</Button>);
    expect(spy).to.have.been.calledWith(
      props.color, props.inverted, props.iconButton, props.disabled, props.flatButton, props.style
    );
  });
});
