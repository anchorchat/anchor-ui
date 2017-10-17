/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Dialog from '../../src/dialog';
import Overlay from '../../src/overlay';
import Button from '../../src/button';
import IconClose from '../../src/icons/icon-close';
import getStyles from '../../src/dialog/get-styles';

chai.use(sinonChai);

describe('Dialog', () => {
  const props = {
    header: null,
    style: { root: true },
    overlayStyle: { overlay: true },
    headerStyle: { header: true },
    hideDialog: () => {},
    iconColor: 'red',
    open: true,
    color: '#1BA6C4'
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should only render if the open prop equals true', () => {
    props.open = false;
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.find(Overlay)).to.have.length(0);
    props.open = true;
  });

  it('should always render an Overlay component', () => {
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.find(Overlay)).to.have.length(1);
  });

  it('should always render two section elements', () => {
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(2);
  });

  it('should always render a Button component', () => {
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('should always render an IconClose icon', () => {
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.find(IconClose)).to.have.length(1);
  });

  it('should not render an h1 element if the header prop is not passed', () => {
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(0);
  });

  it('should render an h1 element if the header prop is passed', () => {
    props.header = 'header';
    const wrapper = shallow(<Dialog {...props} />).dive();

    expect(wrapper.containsMatchingElement(<h1>header</h1>)).to.equal(true);
    props.header = null;
  });

  it('should render children', () => {
    const wrapper = shallow(<Dialog {...props} >{children}</Dialog>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should call section onClick function', () => {
    const spy = sinon.spy();
    props.hideDialog = spy;
    const wrapper = shallow(<Dialog {...props} />).dive();

    wrapper.find('section').at(0).simulate('click');
    expect(spy).to.have.callCount(1);
    props.hideDialog = () => {};
  });

  it('should call Button onClick function', () => {
    const spy = sinon.spy();
    props.hideDialog = spy;
    const wrapper = shallow(<Dialog {...props} />).dive();

    wrapper.find(Button).simulate('click');
    expect(spy).to.have.callCount(1);
    props.hideDialog = () => {};
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Dialog {...props} />).dive();
    expect(spy).to.have.been.calledWith(
      props.color, props.style
    );
  });

  it('should get header styles', () => {
    props.header = 'header';
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Dialog {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.headerStyle);
    props.header = null;
  });
});
