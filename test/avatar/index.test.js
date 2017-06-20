/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Avatar from '../../src/avatar';
import getStyles from '../../src/avatar/get-styles';

chai.use(sinonChai);

describe('Avatar', () => {
  const props = {
    image: 'image',
    style: { root: true },
    status: '',
    statusStyle: { status: true }
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Avatar {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should not render a div element if the status prop is not passed', () => {
    const wrapper = shallow(<Avatar {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the status prop is passed', () => {
    props.status = 'online';
    const wrapper = shallow(<Avatar {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
    props.status = '';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Avatar {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.image, props.style);
  });

  it('should get status styles', () => {
    props.status = 'online';
    const spy = sinon.spy(getStyles, 'status');

    shallow(<Avatar {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.status, props.statusStyle);
    props.status = '';
  });
});
