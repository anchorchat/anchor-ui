/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import AppHeader from '../../src/app-header';
import getStyles from '../../src/app-header/get-styles';

chai.use(sinonChai);

describe('AppHeader', () => {
  const props = {
    text: null,
    icon: null,
    rightButton: null,
    leftButton: null,
    style: { root: true },
    textStyle: { text: true },
    iconStyle: { icon: true },
    rightButtonStyle: { rightButton: true },
    leftButtonStyle: { leftButton: true },
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a header element', () => {
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.find('header')).to.have.length(1);
  });

  it('should not render a div element if the leftButton prop is not passed', () => {
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the leftButton prop is passed', () => {
    props.leftButton = <button />;
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.containsMatchingElement(<div><button /></div>)).to.equal(true);
    props.leftButton = null;
  });

  it('should not render a div element if the icon prop is not passed', () => {
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the icon prop is passed', () => {
    props.icon = <img alt="alt" />;
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.containsMatchingElement(<div><img alt="alt" /></div>)).to.equal(true);
    props.icon = null;
  });

  it('should not render an h1 element if the text prop is not passed', () => {
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(0);
  });

  it('should render an h1 element if the text prop is passed', () => {
    props.text = 'text';
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.containsMatchingElement(<h1>text</h1>)).to.equal(true);
    props.text = null;
  });

  it('should not render a div element if the rightButton prop is not passed', () => {
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the rightButton prop is passed', () => {
    props.rightButton = <button />;
    const wrapper = shallow(<AppHeader {...props} />).dive();

    expect(wrapper.containsMatchingElement(<div><button /></div>)).to.equal(true);
    props.rightButton = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<AppHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(
      props.color, props.style, props.leftButton, props.rightButton
    );
  });

  it('should get leftButton styles', () => {
    props.leftButton = <button />;
    const spy = sinon.spy(getStyles, 'leftButton');

    shallow(<AppHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.leftButtonStyle);
    props.leftButton = null;
  });

  it('should get icon styles', () => {
    props.icon = <img alt="alt" />;
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<AppHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
    props.icon = null;
  });

  it('should get text styles', () => {
    props.text = 'text';
    const spy = sinon.spy(getStyles, 'text');

    shallow(<AppHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.textStyle);
    props.text = null;
  });

  it('should get rightButton styles', () => {
    props.rightButton = <button />;
    const spy = sinon.spy(getStyles, 'rightButton');

    shallow(<AppHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.rightButtonStyle);
    props.rightButton = null;
  });
});
