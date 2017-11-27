/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React, { cloneElement } from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Menu from '../../src/menu';
import Overlay from '../../src/overlay';
import getStyles from '../../src/menu/get-styles';

chai.use(sinonChai);

describe('Menu', () => {
  const props = {
    open: false,
    closeMenu: null,
    header: '',
    headerIcon: null,
    iconStyle: { icon: true },
    style: { root: true },
    headerStyle: { header: true },
    color: '#1BA6C4'
  };
  const children = <p>children</p>;
  const menuItems = React.Children.map(children, child => (
    cloneElement(child, { closeMenu: props.closeMenu })
  ));

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should not render a section element if the closeMenu prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should not render an overlay component if the closeMenu prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.find(Overlay)).to.have.length(0);
  });

  it('should render a nav element', () => {
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('should not render a div element if the headerIcon prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the headerIcon prop is passed', () => {
    props.headerIcon = <span />;
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<div><span /></div>)).to.equal(true);
    props.headerIcon = null;
  });

  it('should not render an h1 element if the header prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.find('h1')).to.have.length(0);
  });

  it('should render an h1 element if the header prop is passed', () => {
    props.header = 'header';
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<h1>header</h1>)).to.equal(true);
    props.header = '';
  });

  it('should render children as menuItems', () => {
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should apply closeMenu prop to children', () => {
    props.closeMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    const closeMenu = wrapper.find('p').prop('closeMenu');

    expect(typeof closeMenu === 'function').to.equal(true);
    props.closeMenu = null;
  });

  it('should execute Overlay onClick function', () => {
    const spy = sinon.spy();
    props.closeMenu = spy;
    const wrapper = shallow(<Menu {...props} >{menuItems}</Menu>).dive();

    wrapper.find(Overlay).simulate('click');
    expect(spy).to.have.callCount(1);
    props.closeMenu = null;
  });

  it('should get sidebar styles', () => {
    const spy = sinon.spy(getStyles, 'sidebar');

    shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get icon styles', () => {
    props.headerIcon = <span />;
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
    props.headerIcon = null;
  });

  it('should get header styles', () => {
    props.header = 'header';
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    expect(spy).to.have.been.calledWith((
      props.color, props.headerIcon, props.headerStyle
    ));
    props.header = '';
  });

  it('should get container styles', () => {
    props.closeMenu = () => {};
    const spy = sinon.spy(getStyles, 'container');

    shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    expect(spy).to.have.callCount(1);
    props.closeMenu = null;
  });

  it('should get overlay styles', () => {
    props.closeMenu = () => {};
    const spy = sinon.spy(getStyles, 'overlay');

    shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.open);
    props.closeMenu = null;
  });

  it('should get root styles', () => {
    props.closeMenu = () => {};
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Menu {...props} >{menuItems}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.open, props.style);
    props.closeMenu = null;
  });
});
