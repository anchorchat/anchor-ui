/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import isFunction from 'lodash/isFunction';
import noop from 'lodash/noop';
import Menu from '../../src/menu/component';
import MenuItem from '../../src/menu-item';
import Overlay from '../../src/overlay';
import IconMenu from '../../src/icons/icon-menu';
import getStyles from '../../src/menu/get-styles';

chai.use(sinonChai);

describe('Menu', () => {
  const props = {
    open: false,
    closeMenu: null,
    header: undefined,
    headerIcon: null,
    iconStyle: {},
    style: {},
    headerStyle: {},
    color: '#1BA6C4',
    children: <MenuItem text="Menu item" onClick={noop} />
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf Menu', () => {
    const component = shallow(<Menu {...props} />);

    expect(component.instance()).to.be.instanceOf(Menu);
  });

  it('should render root elements', () => {
    const component = shallow(<Menu {...props} />);

    expect(component.find('nav')).to.have.length(1);
    expect(component.find('section')).to.have.length(1);
    expect(component.find(MenuItem)).to.have.length(1);
  });

  it('should render overlay menu elements', () => {
    const component = shallow(<Menu {...props} />);

    expect(component.find('section')).to.have.length(1);
    expect(component.find(Overlay)).to.have.length(0);

    component.setProps({ closeMenu: noop });
    expect(component.find('section')).to.have.length(2);
    expect(component.find(Overlay)).to.have.length(1);
  });

  it('should render header element', () => {
    const component = shallow(<Menu {...props} />);

    expect(component.find('h1')).to.have.length(0);

    component.setProps({ header: 'Text' });
    expect(component.find('h1')).to.have.length(1);
    expect(component.containsMatchingElement(<h1>Text</h1>)).to.equal(true);

    component.setProps({ header: <span>Node</span> });
    expect(component.find('h1')).to.have.length(1);
    expect(component.find('h1 > span')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render headerIcon element', () => {
    const component = shallow(<Menu {...props} />);

    expect(component.find('div')).to.have.length(0);
    expect(component.find(IconMenu)).to.have.length(0);

    component.setProps({ headerIcon: <IconMenu /> });
    expect(component.find('div')).to.have.length(1);
    expect(component.find(IconMenu)).to.have.length(1);
  });

  it('should render footer element', () => {
    const component = shallow(<Menu {...props} />);

    expect(component.find('span')).to.have.length(0);

    component.setProps({ footer: 'Text' });
    expect(component.find('span')).to.have.length(1);
    expect(component.containsMatchingElement(<span>Text</span>)).to.equal(true);

    component.setProps({ footer: <span>Node</span> });
    expect(component.find('span')).to.have.length(2);
    expect(component.find('span > span')).to.have.length(1);
    expect(component.find('span').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should apply closeMenu to children props', () => {
    const combinedProps = {
      ...props,
      closeMenu: noop
    };

    const component = shallow(<Menu {...combinedProps} />);
    const closeMenu = component.find(MenuItem).prop('closeMenu');

    expect(isFunction(closeMenu)).to.equal(true);
  });

  it('should execute Overlay onClick function', () => {
    const spy = sinon.spy();
    const combinedProps = {
      ...props,
      closeMenu: spy
    };

    const component = shallow(<Menu {...combinedProps} />);

    component.find(Overlay).simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get sidebar styles', () => {
    const spy = sinon.spy(getStyles, 'sidebar');

    shallow(<Menu {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');
    const combinedProps = {
      ...props,
      headerIcon: <IconMenu />
    };

    shallow(<Menu {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get header styles', () => {
    const spy = sinon.spy(getStyles, 'header');
    const combinedProps = {
      ...props,
      header: 'Text'
    };

    shallow(<Menu {...combinedProps} />);
    expect(spy).to.have.been.calledWith(
      props.color,
      props.headerIcon,
      props.headerStyle
    );
  });

  it('should get container styles', () => {
    const spy = sinon.spy(getStyles, 'container');
    const combinedProps = {
      ...props,
      closeMenu: noop
    };

    shallow(<Menu {...combinedProps} />);
    expect(spy).to.have.callCount(1);
    props.closeMenu = null;
  });

  it('should get overlay styles', () => {
    const spy = sinon.spy(getStyles, 'overlay');
    const combinedProps = {
      ...props,
      closeMenu: noop
    };

    shallow(<Menu {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.open);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const combinedProps = {
      ...props,
      closeMenu: noop
    };

    shallow(<Menu {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.open, 'left', props.style);
  });
});
