/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ChannelHeader from '../../src/channel-header';
import getStyles from '../../src/channel-header/get-styles';

chai.use(sinonChai);

describe('ChannelHeader', () => {
  const props = {
    name: 'name',
    rightButton: null,
    leftButton: null,
    style: { root: true },
    textStyle: { text: true },
    rightButtonStyle: { rightButton: true },
    leftButtonStyle: { leftButton: true },
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a header element', () => {
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.find('header')).to.have.length(1);
  });

  it('should not render a div element if the leftButton prop is not passed', () => {
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the leftButton prop is passed', () => {
    props.leftButton = <button />;
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<div><button /></div>)).to.equal(true);
    props.leftButton = null;
  });

  it('should always render a h1 element', () => {
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should pass the value of the name prop to the h1 element', () => {
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.containsMatchingElement(<h1>name</h1>)).to.equal(true);
  });

  it('should not render a div element if the rightButton prop is not passed', () => {
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the rightButton prop is passed', () => {
    props.rightButton = <button />;
    const wrapper = shallow(<ChannelHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<div><button /></div>)).to.equal(true);
    props.rightButton = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<ChannelHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get leftButton styles', () => {
    props.leftButton = <button />;
    const spy = sinon.spy(getStyles, 'leftButton');

    shallow(<ChannelHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.leftButtonStyle);
    props.leftButton = null;
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<ChannelHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.textStyle);
  });

  it('should get rightButton styles', () => {
    props.rightButton = <button />;
    const spy = sinon.spy(getStyles, 'rightButton');

    shallow(<ChannelHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.rightButtonStyle);
    props.rightButton = null;
  });
});
