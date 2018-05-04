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

  // it('should not render an overlay component if the closeMenu prop is not passed', () => {
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.find(Overlay)).to.have.length(0);
  // });
  //
  // it('should render a nav element', () => {
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.find('nav')).to.have.length(1);
  // });
  //
  // it('should not render a div element if the headerIcon prop is not passed', () => {
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.find('div')).to.have.length(0);
  // });
  //
  // it('should render a div element if the headerIcon prop is passed', () => {
  //   props.headerIcon = <span />;
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.containsMatchingElement(<div><span /></div>)).to.equal(true);
  //   props.headerIcon = null;
  // });
  //
  // it('should not render an h1 element if the header prop is not passed', () => {
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.find('h1')).to.have.length(0);
  // });
  //
  // it('should render an h1 element if the header prop is passed', () => {
  //   props.header = 'header';
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.containsMatchingElement(<h1>header</h1>)).to.equal(true);
  //   props.header = '';
  // });
  //
  // it('should render children as children', () => {
  //   const component = shallow(<Menu {...props} />);
  //
  //   expect(component.containsMatchingElement(<p>children</p>)).to.equal(true);
  // });
  //
  // it('should apply closeMenu prop to children', () => {
  //   props.closeMenu = noop;
  //   const component = shallow(<Menu {...props} />);
  //   const closeMenu = component.find('p').prop('closeMenu');
  //
  //   expect(isFunction(closeMenu)).to.equal(true);
  //   props.closeMenu = null;
  // });

  it('should execute Overlay onClick function', () => {
    const spy = sinon.spy();
    props.closeMenu = spy;
    const component = shallow(<Menu {...props} />);

    component.find(Overlay).simulate('click');
    expect(spy).to.have.callCount(1);
    props.closeMenu = null;
  });

  it('should get sidebar styles', () => {
    const spy = sinon.spy(getStyles, 'sidebar');

    shallow(<Menu {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get icon styles', () => {
    props.headerIcon = <span />;
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Menu {...props} />);
    expect(spy).to.have.been.calledWith(props.iconStyle);
    props.headerIcon = null;
  });

  it('should get header styles', () => {
    props.header = 'header';
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Menu {...props} />);
    expect(spy).to.have.been.calledWith(
      props.color,
      props.headerIcon,
      props.headerStyle
    );
    props.header = '';
  });

  it('should get container styles', () => {
    props.closeMenu = noop;
    const spy = sinon.spy(getStyles, 'container');

    shallow(<Menu {...props} />);
    expect(spy).to.have.callCount(1);
    props.closeMenu = null;
  });

  it('should get overlay styles', () => {
    props.closeMenu = noop;
    const spy = sinon.spy(getStyles, 'overlay');

    shallow(<Menu {...props} />);
    expect(spy).to.have.been.calledWith(props.open);
    props.closeMenu = null;
  });

  it('should get root styles', () => {
    props.closeMenu = noop;
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Menu {...props} />);
    expect(spy).to.have.been.calledWith(props.open, 'left', props.style);
    props.closeMenu = null;
  });
});
