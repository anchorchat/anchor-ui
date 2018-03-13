/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Modal from '../../src/modal';
import getStyles from '../../src/modal/get-styles';
import Overlay from '../../src/overlay';

chai.use(sinonChai);

describe('Modal', () => {
  const props = {
    style: { root: true },
    contentStyle: { content: true },
    footerStyle: { footer: true },
    open: true,
    overlayStyle: { overlay: true },
    color: '#1BA6C4',
    children: '',
    actions: '',
    header: null
  };
  const children = <p>children</p>;
  const actions = <p>actions</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a Overlay element', () => {
    const wrapper = shallow(<Modal {...props}>{children}</Modal>).dive();

    expect(wrapper.find(Overlay)).to.have.length(1);
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Modal {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(2);
  });

  it('should always render a footer element', () => {
    const wrapper = shallow(<Modal {...props} />).dive();

    expect(wrapper.find('footer')).to.have.length(1);
  });

  it('should only render if the open prop equals true', () => {
    props.open = false;
    const wrapper = shallow(<Modal {...props} />).dive();

    expect(wrapper.find(Overlay)).to.have.length(0);
    props.open = true;
  });

  it('should pass the value of the children prop to the section element', () => {
    const wrapper = shallow(<Modal {...props}>{children}</Modal>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should pass the value of the actions prop to the footer element', () => {
    const wrapper = shallow(<Modal {...props}>{actions}</Modal>).dive();

    expect(wrapper.containsMatchingElement(<p>actions</p>)).to.equal(true);
  });

  it('should render header', () => {
    const wrapper = shallow(<Modal {...props}>{actions}</Modal>).dive();

    expect(wrapper.find('h1')).to.have.length(0);

    wrapper.setProps({ header: <span>header</span> });
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.find('h1').containsMatchingElement(<span>header</span>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Modal {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get content styles', () => {
    const spy = sinon.spy(getStyles, 'content');

    shallow(<Modal {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.contentStyle);
  });

  it('should get footer styles', () => {
    const spy = sinon.spy(getStyles, 'footer');

    shallow(<Modal {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.color, props.footerStyle);
  });
});
