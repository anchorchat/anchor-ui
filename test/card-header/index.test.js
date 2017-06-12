/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CardHeader from '../../src/card-header';
import getStyles from '../../src/card-header/get-styles';

chai.use(sinonChai);

describe('CardHeader', () => {
  const props = {
    style: {},
    titleStyle: {},
    subtitleStyle: {},
    subtitle: null,
    avatar: '',
    avatarStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a span element', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('header')).to.have.length(1);
  });

  it('should always render a div element', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should always render a h1 element', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });
});
