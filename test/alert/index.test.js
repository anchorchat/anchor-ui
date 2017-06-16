/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Alert from '../../src/alert';
import Button from '../../src/button';
import IconSuccess from '../../src/icons/icon-success';
import getStyles from '../../src/alert/get-styles';

chai.use(sinonChai);

describe('Alert', () => {
  const props = {
    text: 'text',
    type: 'success',
    style: { root: true },
    iconStyle: { icon: true },
    textStyle: { text: true },
    buttonStyle: { button: true },
    hideAlert: null,
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a div element', () => {
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should always render a p element', () => {
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should pass the value of the text prop to the p element', () => {
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.containsMatchingElement(<p>text</p>)).to.equal(true);
  });

  it('should not render a Button component if the hideAlert prop is not passed', () => {
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.find(Button)).to.have.length(0);
  });

  it('should render a Button component if the hideAlert prop is passed', () => {
    props.hideAlert = () => {};
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.find(Button)).to.have.length(1);
    props.hideAlert = null;
  });

  it('should pass the value of the type prop to the icons object', () => {
    const wrapper = shallow(<Alert {...props} />).dive();

    expect(wrapper.find(IconSuccess)).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Alert {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.type, props.style);
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Alert {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<Alert {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.textStyle);
  });
});
