/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import PopOver from '../../src/pop-over';
import getStyles from '../../src/pop-over/get-styles';

chai.use(sinonChai);

describe('PopOver', () => {
  const props = {
    header: null,
    style: { root: true },
    headerStyle: { header: true },
    open: true,
    position: { position: true },
    secondaryMenuItems: null,
    dividerText: null,
    children: '',
    popOverRef: () => {}
  };
  const children = <p>children</p>;
  const divider = 'text';
  const secondaryMenuItems = 'text';

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<PopOver {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render the value of the children prop', () => {
    const wrapper = shallow(<PopOver {...props} >{children}</PopOver>);

    expect(wrapper.contains(children)).to.equal(true);
  });

  it('should always render the value of the divider prop', () => {
    const wrapper = shallow(<PopOver {...props} >{divider}</PopOver>);

    expect(wrapper.contains(divider)).to.equal(true);
  });

  it('should always render the value of the secondaryMenuItems prop', () => {
    const wrapper = shallow(<PopOver {...props} >{secondaryMenuItems}</PopOver>);

    expect(wrapper.contains(secondaryMenuItems)).to.equal(true);
  });

  it('should render a h1 element if the header prop is passed', () => {
    let wrapper = shallow(<PopOver {...props} />).dive();

    expect(wrapper.find('p')).to.have.length(0);

    props.header = 'text';
    wrapper = shallow(<PopOver {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<h1>text</h1>)).to.equal(true);
    props.header = '';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<PopOver {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.position, props.style);
  });

  it('should get header styles', () => {
    const spy = sinon.spy(getStyles, 'header');
    props.header = 'text';

    shallow(<PopOver {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.headerStyle);
    props.header = '';
  });
});
