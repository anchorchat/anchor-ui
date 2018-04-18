/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import noop from 'lodash/noop';
import sinonChai from 'sinon-chai';
import Switch from '../../src/switch/component';
import getStyles from '../../src/switch/get-styles';

chai.use(sinonChai);

describe('Switch', () => {
  const props = {
    active: false,
    toggleSwitch: noop,
    label: 'label',
    style: { root: true },
    trackStyle: { track: true },
    knobStyle: { knob: true },
    labelStyle: { label: true },
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render two section elements', () => {
    const wrapper = shallow(<Switch {...props} />);

    expect(wrapper.find('section')).to.have.length(2);
  });

  it('should always render a span element', () => {
    const wrapper = shallow(<Switch {...props} />);

    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should always render two div elements', () => {
    const wrapper = shallow(<Switch {...props} />);

    expect(wrapper.find('div')).to.have.length(2);
  });

  it('should pass the value of the label prop to the span element', () => {
    const wrapper = shallow(<Switch {...props} />);

    expect(wrapper.containsMatchingElement(<span>label</span>)).to.equal(true);
  });

  it('should execute section onClick function', () => {
    const spy = sinon.spy();
    props.toggleSwitch = spy;
    const wrapper = shallow(<Switch {...props} />);

    wrapper.find('section').at(1).simulate('click');
    expect(spy).to.have.callCount(1);
    props.toggleSwitch = noop;
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Switch {...props} />);
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });

  it('should get track styles', () => {
    const spy = sinon.spy(getStyles, 'track');

    shallow(<Switch {...props} />);
    expect(spy).to.have.been.calledWith(
      props.color,
      props.active,
      props.trackStyle
    );
  });

  it('should get knob styles', () => {
    const spy = sinon.spy(getStyles, 'knob');

    shallow(<Switch {...props} />);
    expect(spy).to.have.been.calledWith(
      props.color,
      props.active,
      props.knobStyle
    );
  });
});
