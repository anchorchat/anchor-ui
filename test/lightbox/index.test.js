/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Lightbox from '../../src/lightbox';
import Overlay from '../../src/overlay';
import Button from '../../src/button';
import IconClose from '../../src/icons/icon-close';
import getStyles from '../../src/lightbox/get-styles';

chai.use(sinonChai);

describe('Lightbox', () => {
  const props = {
    style: { root: true },
    overlayStyle: { overlay: true },
    hideLightbox: () => {},
    image: 'image',
    title: 'title',
    iconColor: 'red',
    open: true,
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render an Overlay component', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find(Overlay)).to.have.length(1);
  });

  it('should always render two section elements', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find('section')).to.have.length(2);
  });

  it('should always render a header element', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find('header')).to.have.length(1);
  });

  it('should always render a Button component', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('should always render an IconClose icon', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find(IconClose)).to.have.length(1);
  });

  it('should always render an img element', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should pass the value of the title prop to the header element', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.containsMatchingElement(
      <header>
        title
        <Button>
          <IconClose />
        </Button>
      </header>)
    ).to.equal(true);
  });

  it('should execute section onClick function', () => {
    const spy = sinon.spy();
    props.hideLightbox = spy;
    const wrapper = shallow(<Lightbox {...props} />);

    wrapper.find('section').at(0).simulate('click');
    expect(spy).to.have.callCount(1);
    props.hideLightbox = () => {};
  });

  it('should execute Button onClick function', () => {
    const spy = sinon.spy();
    props.hideLightbox = spy;
    const wrapper = shallow(<Lightbox {...props} />);

    wrapper.find(Button).simulate('click');
    expect(spy).to.have.callCount(1);
    props.hideLightbox = () => {};
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Lightbox {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
