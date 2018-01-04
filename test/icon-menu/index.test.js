/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EventListener from 'react-event-listener';
import IconMenu from '../../src/icon-menu/component';
import IconClose from '../../src/icons/icon-close';
import Button from '../../src/button';
import PopOver from '../../src/pop-over';
import MenuItem from '../../src/menu-item';
import getStyles from '../../src/icon-menu/get-styles';

chai.use(sinonChai);

describe('IconMenu', () => {
  const props = {
    icon: <IconClose />,
    style: {},
    headerStyle: {},
    contentStyle: {},
    dividerStyle: {},
    buttonStyle: {}
  };
  const children = <MenuItem text="Test" onClick={() => {}} />;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf IconMenu', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);

    expect(component.instance()).to.be.instanceOf(IconMenu);
  });

  it('should render root elements', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);

    expect(component.find('div')).to.have.length(2);
    expect(component.find(Button)).to.have.length(1);
    expect(component.find(IconClose)).to.have.length(1);
    expect(component.find(PopOver)).to.have.length(1);
    expect(component.find(MenuItem)).to.have.length(1);
  });

  it('should add secondaryMenuItems prop to PopOver', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);

    let secondaryMenuItems = component.find(PopOver).map(node => node.prop('secondaryMenuItems'));
    expect(secondaryMenuItems).to.have.length(1);
    expect(secondaryMenuItems).to.deep.equal([null]);

    component.setProps({ secondaryMenuItems: [children] });
    secondaryMenuItems = component.find(PopOver).map(node => node.prop('secondaryMenuItems'));
    expect(secondaryMenuItems).to.have.length(1);
    expect(secondaryMenuItems).to.not.deep.equal([null]);
    expect(secondaryMenuItems).to.not.deep.equal([[children]]);
  });

  it('should add header prop to PopOver', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);
    const header = <span>Header</span>;

    let headerProp = component.find(PopOver).map(node => node.prop('header'));
    expect(headerProp).to.deep.equal([null]);

    component.setProps({ header });
    headerProp = component.find(PopOver).map(node => node.prop('header'));
    expect(headerProp).to.deep.equal([header]);
  });

  it('should render EventListener', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);

    expect(component.find(EventListener)).to.have.length(0);

    component.setState({ open: true, positioned: true });
    expect(component.find(EventListener)).to.have.length(1);
  });

  it('should call openMenu', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);

    expect(component.state('open')).to.equal(false);
    expect(component.find(EventListener)).to.have.length(0);
    let popOverOpenProp = component.find(PopOver).map(node => node.prop('open'));
    expect(popOverOpenProp).to.deep.equal([false]);

    component.find(Button).simulate('click');
    expect(component.state('open')).to.equal(true);
    expect(component.find(EventListener)).to.have.length(1);
    popOverOpenProp = component.find(PopOver).map(node => node.prop('open'));
    expect(popOverOpenProp).to.deep.equal([true]);
  });

  it('should call closeMenu', () => {
    const component = shallow(<IconMenu {...props}>{children}</IconMenu>);

    component.setState({ open: true, positioned: true });
    expect(component.state('open')).to.equal(true);
    expect(component.find(EventListener)).to.have.length(1);
    let popOverOpenProp = component.find(PopOver).map(node => node.prop('open'));
    expect(popOverOpenProp).to.deep.equal([true]);

    component.find(Button).simulate('click');
    expect(component.state('open')).to.equal(false);
    expect(component.find(EventListener)).to.have.length(0);
    popOverOpenProp = component.find(PopOver).map(node => node.prop('open'));
    expect(popOverOpenProp).to.deep.equal([false]);
  });

  it('should call onMenuClose', () => {
    const spy = sinon.spy();
    const combinedProps = {
      ...props,
      onMenuClose: spy
    };
    const component = shallow(<IconMenu {...combinedProps}>{children}</IconMenu>);

    component.setState({ open: true, positioned: true });
    component.find(Button).simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<IconMenu {...props}>{children}</IconMenu>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
