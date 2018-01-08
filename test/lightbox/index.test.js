/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EventListener from 'react-event-listener';
import Lightbox from '../../src/lightbox/component';
import Portal from '../../src/portal';
import Overlay from '../../src/overlay';
import Button from '../../src/button';
import IconClose from '../../src/icons/icon-close';
import getStyles from '../../src/lightbox/get-styles';

chai.use(sinonChai);

describe('Lightbox', () => {
  const props = {
    hideLightbox: () => {},
    image: 'image',
    style: {},
    overlayStyle: {},
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf Lightbox', () => {
    const component = shallow(<Lightbox {...props} />);

    expect(component.instance()).to.be.instanceOf(Lightbox);
  });

  it('should render root elements', () => {
    const component = shallow(<Lightbox {...props} />);

    component.setProps({ open: true });
    expect(component.find(Portal)).to.have.length(1);
    expect(component.find(Overlay)).to.have.length(1);
    expect(component.find('section')).to.have.length(2);
    expect(component.find('header')).to.have.length(1);
    expect(component.find(Button)).to.have.length(1);
    expect(component.find(IconClose)).to.have.length(1);
    expect(component.find('img')).to.have.length(1);
    expect(component.find(EventListener)).to.have.length(1);
  });

  it('should render title element', () => {
    const component = shallow(<Lightbox {...props} />);

    component.setProps({ open: true, title: 'Text' });
    expect(component.containsMatchingElement('Text')).to.equal(true);

    component.setProps({ title: <span>Node</span> });
    expect(component.find('span')).to.have.length(1);
    expect(component.containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should call onClick of clickAway section', () => {
    const spy = sinon.spy();
    const component = shallow(<Lightbox {...props} />);

    component.setProps({ open: true, hideLightbox: spy });
    component.find('section').at(0).simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should call onClick of Button', () => {
    const spy = sinon.spy();
    const component = shallow(<Lightbox {...props} />);

    component.setProps({ open: true, hideLightbox: spy });
    component.find(Button).simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const combinedProps = {
      ...props,
      open: true
    };

    shallow(<Lightbox {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
