/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
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
    toggleMenu: null,
    header: '',
    headerIcon: null,
    iconStyle: { icon: true },
    style: { root: true },
    headerStyle: { header: true },
    color: '#1BA6C4'
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render as a sidebar menu if the toggleMenu prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('section')).to.have.length(0);
  });

  it('should render a nav element', () => {
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('should not render a div element if the headerIcon prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the headerIcon prop is passed', () => {
    props.headerIcon = <span />;
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<div><span /></div>)).to.equal(true);
    props.headerIcon = null;
  });

  it('should not render an h1 element if the header prop is not passed', () => {
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('h1')).to.have.length(0);
  });

  it('should render an h1 element if the header prop is passed', () => {
    props.header = 'header';
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<h1>header</h1>)).to.equal(true);
    props.header = '';
  });

  it('should render children as menuItems', () => {
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should render as a toggleable menu if the toggleMenu prop is passed', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('section')).to.have.length(1);
    props.toggleMenu = null;
  });

  it('should render a section element', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('section')).to.have.length(1);
    props.toggleMenu = null;
  });

  it('should render an Overlay component', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find(Overlay)).to.have.length(1);
    props.toggleMenu = null;
  });

  it('should render a nav element', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('nav')).to.have.length(1);
    props.toggleMenu = null;
  });

  it('should not render a div element if the headerIcon prop is not passed', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('div')).to.have.length(0);
    props.toggleMenu = null;
  });

  it('should render a div element if the headerIcon prop is passed', () => {
    props.toggleMenu = () => {};
    props.headerIcon = <span />;
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<div><span /></div>)).to.equal(true);
    props.toggleMenu = null;
    props.headerIcon = null;
  });

  it('should not render an h1 element if the header prop is not passed', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.find('h1')).to.have.length(0);
    props.toggleMenu = null;
  });

  it('should render an h1 element if the header prop is passed', () => {
    props.toggleMenu = () => {};
    props.header = 'header';
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<h1>header</h1>)).to.equal(true);
    props.toggleMenu = null;
    props.header = '';
  });

  it('should render children as menuItems', () => {
    props.toggleMenu = () => {};
    const wrapper = shallow(<Menu {...props} >{children}</Menu>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
    props.toggleMenu = null;
  });

  it('should get sidebar styles', () => {
    const spy = sinon.spy(getStyles, 'sidebar');

    shallow(<Menu {...props} >{children}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get icon styles', () => {
    props.headerIcon = <span />;
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Menu {...props} >{children}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
    props.headerIcon = null;
  });

  it('should get header styles', () => {
    props.header = 'header';
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Menu {...props} >{children}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.color, props.headerIcon, props.headerStyle);
    props.header = '';
  });

  it('should get container styles', () => {
    props.toggleMenu = () => {};
    const spy = sinon.spy(getStyles, 'container');

    shallow(<Menu {...props} >{children}</Menu>).dive();
    expect(spy).to.have.callCount(1);
    props.toggleMenu = null;
  });

  it('should get overlay styles', () => {
    props.toggleMenu = () => {};
    const spy = sinon.spy(getStyles, 'overlay');

    shallow(<Menu {...props} >{children}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.open);
    props.toggleMenu = null;
  });

  it('should get root styles', () => {
    props.toggleMenu = () => {};
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Menu {...props} >{children}</Menu>).dive();
    expect(spy).to.have.been.calledWith(props.open, props.style);
    props.toggleMenu = null;
  });
});
