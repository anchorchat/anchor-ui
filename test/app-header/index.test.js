/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import AppHeader from '../../src/app-header/component';
import getStyles from '../../src/app-header/get-styles';

chai.use(sinonChai);

describe('AppHeader', () => {
  const props = {
    text: null,
    icon: null,
    rightButton: null,
    leftButton: null,
    style: {},
    textStyle: {},
    iconStyle: {},
    rightButtonStyle: {},
    leftButtonStyle: {},
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a header element', () => {
    const component = shallow(<AppHeader {...props} />);

    expect(component.find('header')).to.have.length(1);
  });

  it('should render a leftButton element', () => {
    const component = shallow(<AppHeader {...props} />);

    expect(component.find('div')).to.have.length(0);

    component.setProps({ leftButton: <button /> });
    expect(component.find('div')).to.have.length(1);
    expect(component.find('div').containsMatchingElement(<button />)).to.equal(true);
  });

  it('should render icon element', () => {
    const component = shallow(<AppHeader {...props} />);

    expect(component.find('div')).to.have.length(0);

    component.setProps({ icon: <img alt="alt" /> });
    expect(component.find('div').containsMatchingElement(<img alt="alt" />)).to.equal(true);
  });

  it('should render text', () => {
    const component = shallow(<AppHeader {...props} />);

    expect(component.find('h1')).to.have.length(0);

    component.setProps({ text: 'Test' });
    expect(component.find('h1')).to.have.length(1);
    expect(component.containsMatchingElement(<h1>Test</h1>)).to.equal(true);

    component.setProps({ text: <span>Node</span> });
    expect(component.find('h1 > span')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render a rightButton element', () => {
    const component = shallow(<AppHeader {...props} />);

    expect(component.find('div')).to.have.length(0);

    component.setProps({ rightButton: <button /> });
    expect(component.find('div')).to.have.length(1);
    expect(component.find('div').containsMatchingElement(<button />)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<AppHeader {...props} />);
    expect(spy).to.have.been.calledWith(
      props.color, props.leftButton, props.rightButton, props.style
    );
  });

  it('should get leftButton styles', () => {
    const spy = sinon.spy(getStyles, 'leftButton');
    const combinedProps = {
      ...props,
      leftButton: <button />
    };

    shallow(<AppHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.leftButtonStyle);
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');
    const combinedProps = {
      ...props,
      icon: <img alt="alt" />
    };

    shallow(<AppHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');
    const combinedProps = {
      ...props,
      text: 'Test'
    };

    shallow(<AppHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.textStyle);
  });

  it('should get rightButton styles', () => {
    const spy = sinon.spy(getStyles, 'rightButton');
    const combinedProps = {
      ...props,
      rightButton: <button />
    };

    shallow(<AppHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.rightButtonStyle);
  });
});
