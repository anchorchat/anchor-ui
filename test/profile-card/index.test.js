/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ProfileCard from '../../src/profile-card';
import getStyles from '../../src/profile-card/get-styles';

chai.use(sinonChai);

describe('ProfileCard', () => {
  const props = {
    avatar: '',
    style: {},
    usernameStyle: {},
    username: 'test',
    color: '#1BA6C4'
  };


  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<ProfileCard {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a h1 element', () => {
    const wrapper = shallow(<ProfileCard {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render a h1 element if the username prop is passed', () => {
    const wrapper = shallow(<ProfileCard {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<h1>test</h1>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<ProfileCard {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.color, props.avatar, props.style);
  });
});
