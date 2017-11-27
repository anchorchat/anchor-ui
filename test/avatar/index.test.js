/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Avatar from '../../src/avatar/component';
import getStyles from '../../src/avatar/get-styles';

chai.use(sinonChai);

describe('Avatar', () => {
  const props = {
    image: 'image',
    defaultImage: '',
    style: {},
    status: '',
    statusStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a section element', () => {
    const component = shallow(<Avatar {...props} />);

    expect(component.find('section')).to.have.length(1);
  });

  it('should render status element', () => {
    const component = shallow(<Avatar {...props} />);

    expect(component.find('div')).to.have.length(0);

    component.setProps({ status: 'online' });
    expect(component.find('div')).to.have.length(1);

    component.setProps({ status: 'away' });
    expect(component.find('div')).to.have.length(1);

    component.setProps({ status: 'offline' });
    expect(component.find('div')).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Avatar {...props} />);
    expect(spy).to.have.been.calledWith((
      props.image, props.defaultImage, props.style
    ));
  });

  it('should get status styles', () => {
    const spy = sinon.spy(getStyles, 'status');
    const combinedProps = {
      ...props,
      status: 'online'
    };

    shallow(<Avatar {...combinedProps} />);
    expect(spy).to.have.been.calledWith((
      combinedProps.status, props.statusStyle
    ));
  });
});
