/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Banner from '../../src/banner/component';
import Button from '../../src/button';
import getStyles from '../../src/banner/get-styles';

chai.use(sinonChai);

describe('Banner', () => {
  const props = {
    content: {
      desktop: <span>Node</span>,
      mobile: <span>Node</span>
    },
    hideBanner: () => {},
    style: {},
    open: true
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf AdminBadge', () => {
    const component = shallow(<Banner {...props} />);

    expect(component.instance()).to.be.instanceOf(Banner);
  });

  it('should return null', () => {
    const combinedProps = {
      ...props,
      open: false
    };

    const component = shallow(<Banner {...combinedProps} />);

    expect(component.find('section').exists()).to.equal(false);
  });

  it('should render a section element', () => {
    const component = shallow(<Banner {...props} />);

    expect(component.find('section')).to.have.length(2);
  });

  it('should render content element', () => {
    const component = shallow(<Banner {...props} />);

    expect((
      component.find('section > section').containsMatchingElement(<span>Node</span>)
    )).to.equal(true);
  });

  it('should call Button onClick function', () => {
    const spy = sinon.spy();
    const combinedProps = {
      ...props,
      hideBanner: spy
    };

    const component = shallow(<Banner {...combinedProps} />);

    component.find(Button).simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const state = { type: 'desktop' };

    shallow(<Banner {...props} />);
    expect(spy).to.have.been.calledWith(state.type, props.style);
  });
});
