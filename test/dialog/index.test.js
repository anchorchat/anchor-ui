/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EventListener from 'react-event-listener';
import noop from 'lodash/noop';
import Dialog from '../../src/dialog/component';
import Overlay from '../../src/overlay';
import Button from '../../src/button';
import IconClose from '../../src/icons/icon-close';
import getStyles from '../../src/dialog/get-styles';

chai.use(sinonChai);

describe('Dialog', () => {
  const props = {
    style: {},
    overlayStyle: {},
    headerStyle: {},
    hideDialog: noop,
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render root elements', () => {
    const component = shallow(<Dialog {...props} />);

    expect(component.find(Overlay)).to.have.length(0);
    expect(component.find('section')).to.have.length(0);
    expect(component.find(Button)).to.have.length(0);
    expect(component.find(IconClose)).to.have.length(0);
    expect(component.find(EventListener)).to.have.length(0);

    component.setProps({ open: true });
    expect(component.find(Overlay)).to.have.length(1);
    expect(component.find('section')).to.have.length(2);
    expect(component.find(Button)).to.have.length(1);
    expect(component.find(IconClose)).to.have.length(1);
    expect(component.find(EventListener)).to.have.length(1);
  });

  it('should render header element', () => {
    const component = shallow(<Dialog {...props} />);

    component.setProps({ open: true });
    expect(component.find('h1')).to.have.length(0);

    component.setProps({ header: 'header' });
    expect(component.find('h1')).to.have.length(1);
    expect(component.containsMatchingElement(<h1>header</h1>)).to.equal(true);

    component.setProps({ header: <span>node</span> });
    expect(component.find('h1')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>node</span>)).to.equal(true);
  });

  it('should render children', () => {
    const children = <p>children</p>;
    const component = shallow(<Dialog {...props}>{children}</Dialog>);

    component.setProps({ open: true });
    expect(component.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should call hideDialog', () => {
    const spy = sinon.spy();
    const component = shallow(<Dialog {...props} />);

    component.setProps({ open: true, hideDialog: spy });
    component.find('section').at(0).simulate('click');
    expect(spy).to.have.callCount(1);

    component.find(Button).simulate('click');
    expect(spy).to.have.callCount(2);
  });

  it('should get root styles', () => {
    const combinedProps = {
      ...props,
      open: true
    };
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Dialog {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.color, props.style);
  });

  it('should get header styles', () => {
    const combinedProps = {
      ...props,
      header: 'header',
      open: true
    };
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Dialog {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.headerStyle);
  });
});
