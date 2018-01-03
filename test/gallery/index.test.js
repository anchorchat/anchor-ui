/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Gallery from '../../src/gallery/component';
import Lightbox from '../../src/lightbox';
import getStyles from '../../src/gallery/get-styles';

chai.use(sinonChai);

describe('Gallery', () => {
  const props = {
    items: [],
    style: {},
    itemContainerStyle: {},
    itemStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf Gallery', () => {
    const component = shallow(<Gallery {...props} />);

    expect(component.instance()).to.be.instanceOf(Gallery);
  });

  it('should render root elements', () => {
    const component = shallow(<Gallery {...props} />);

    expect(component.find('section')).to.have.length(1);
    expect(component.find('div')).to.have.length(1);
  });

  it('should render items', () => {
    const component = shallow(<Gallery {...props} />);

    expect(component.find('div')).to.have.length(1);

    component.setProps({
      items: [{
        src: 'https://source.unsplash.com/featured/?man',
        alt: 'https://source.unsplash.com/featured/?man'
      }]
    });
    expect(component.find('div')).to.have.length(2);
    expect(component.find('div > img')).to.have.length(1);
    const links = component.find('img').map(node => node.prop('src'));
    expect(links).to.deep.equal(['https://source.unsplash.com/featured/?man']);
  });

  it('should render Lightbox', () => {
    const combinedProps = {
      ...props,
      items: [{
        src: 'https://source.unsplash.com/featured/?man',
        alt: 'https://source.unsplash.com/featured/?man'
      }]
    };
    const component = shallow(<Gallery {...combinedProps} />);

    expect(component.find(Lightbox)).to.have.length(0);

    component.setProps({ enableLightbox: true });
    expect(component.find(Lightbox)).to.have.length(0);

    component.setState({ lightbox: combinedProps.items[0] });
    expect(component.find(Lightbox)).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Gallery {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get itemContainer styles', () => {
    const combinedProps = {
      ...props,
      items: [{
        src: 'https://source.unsplash.com/featured/?man',
        alt: 'https://source.unsplash.com/featured/?man'
      }]
    };
    const spy = sinon.spy(getStyles, 'itemContainer');

    shallow(<Gallery {...combinedProps} />);
    expect(spy).to.have.been.calledWith(320, false, props.itemContainerStyle);
  });

  it('should get item styles', () => {
    const combinedProps = {
      ...props,
      items: [{
        src: 'https://source.unsplash.com/featured/?man',
        alt: 'https://source.unsplash.com/featured/?man'
      }]
    };
    const spy = sinon.spy(getStyles, 'item');

    shallow(<Gallery {...combinedProps} />);
    expect(spy).to.have.been.calledWith(320, props.itemStyle);
  });
});
