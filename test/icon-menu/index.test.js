/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import IconMenu from '../../src/icon-menu';
import PopOver from '../../src/pop-over';
import Button from '../../src/button';
import getStyles from '../../src/icon-menu/get-styles';

chai.use(sinonChai);

describe('icon-menu', () => {
  const props = {
    header: null,
    style: {},
    headerStyle: {},
    contentStyle: {},
    secondaryMenuItems: null,
    dividerText: null,
    icon: 'url',
    children: <p>text</p>,
    onMenuClose: () => {}
  };


  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a div element', () => {
    const wrapper = shallow(<IconMenu {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(2);
  });

  it('should always render a PopOver element', () => {
    const wrapper = shallow(<IconMenu {...props} />).dive();

    expect(wrapper.find(PopOver)).to.have.length(1);
  });

  it('should always render a Button element', () => {
    const wrapper = shallow(<IconMenu {...props} />).dive();

    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<IconMenu {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });
});
