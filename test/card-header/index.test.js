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
    subtitle: 'text',
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

  it('should pass the value of the header prop to the h2 element', () => {
    const wrapper = shallow(<CardHeader {...props} />);

    expect(wrapper.containsMatchingElement(<h2>text</h2>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get title styles', () => {
    const spy = sinon.spy(getStyles, 'title');

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get subtitle styles', () => {
    const spy = sinon.spy(getStyles, 'subtitle');

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.subtitleStyle);
  });
});
