/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ChannelHeader from '../../src/channel-header/component';
import getStyles from '../../src/channel-header/get-styles';

chai.use(sinonChai);

describe('ChannelHeader', () => {
  const props = {
    name: '',
    style: {},
    textStyle: {},
    rightButtonStyle: {},
    leftButtonStyle: {},
    secondaryTextStyle: {},
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a header element containing a h1 element', () => {
    const component = shallow(<ChannelHeader {...props} />);

    expect(component.find('header')).to.have.length(1);
    expect(component.find('h1')).to.have.length(1);
  });

  it('should render leftButton', () => {
    const component = shallow(<ChannelHeader {...props} />);

    expect(component.find('div')).to.have.length(0);

    component.setProps({ leftButton: <button /> });
    expect(component.find('div')).to.have.length(1);
  });

  it('should render rightButton', () => {
    const component = shallow(<ChannelHeader {...props} />);

    expect(component.find('div')).to.have.length(0);

    component.setProps({ rightButton: <button /> });
    expect(component.find('div')).to.have.length(1);
  });

  it('should render name', () => {
    const component = shallow(<ChannelHeader {...props} />);

    component.setProps({ name: 'Name' });
    expect(component.containsMatchingElement(<h1>Name</h1>)).to.equal(true);

    component.setProps({ name: <span>Node</span> });
    expect(component.find('h1 > span')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render secondaryText', () => {
    const component = shallow(<ChannelHeader {...props} />);

    expect(component.find('h2')).to.have.length(0);

    component.setProps({ secondaryText: 'secondaryText' });
    expect(component.find('h2')).to.have.length(1);
    expect(component.containsMatchingElement(<h2>secondaryText</h2>)).to.equal(true);

    component.setProps({ secondaryText: <span>Node</span> });
    expect(component.find('h2 > span')).to.have.length(1);
    expect(component.find('h2').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<ChannelHeader {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get leftButton styles', () => {
    const spy = sinon.spy(getStyles, 'leftButton');
    const combinedProps = {
      ...props,
      leftButton: <button />
    };

    shallow(<ChannelHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.leftButtonStyle);
    props.leftButton = null;
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<ChannelHeader {...props} />);
    expect(spy).to.have.been.calledWith(props.textStyle);
  });

  it('should get secondaryText styles', () => {
    const spy = sinon.spy(getStyles, 'secondaryText');
    const combinedProps = {
      ...props,
      secondaryText: 'text'
    };

    shallow(<ChannelHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.color, props.secondaryTextStyle);
  });

  it('should get rightButton styles', () => {
    const spy = sinon.spy(getStyles, 'rightButton');
    const combinedProps = {
      ...props,
      rightButton: <button />
    };

    shallow(<ChannelHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.rightButtonStyle);
    props.rightButton = null;
  });
});
