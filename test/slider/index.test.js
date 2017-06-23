/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Slider from '../../src/slider';
import getStyles from '../../src/slider/get-styles';
import getPercentage from '../../src/internal/get-percentage';

chai.use(sinonChai);

describe('Slider', () => {
  const props = {
    onChange: () => {},
    value: 0,
    label: 'label',
    name: 'name',
    max: 1,
    min: 0,
    step: null,
    disabled: false,
    error: null,
    errorStyle: { error: true },
    style: { root: true },
    labelStyle: { label: true },
    color: '#1BA6C4'
  };
  const percentage = getPercentage(props.value, props.min, props.max);

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a label element', () => {
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should always render five div elements', () => {
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.find('div')).to.have.length(5);
  });

  it('should always render an input element', () => {
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should not render a span element if the error prop is not passed', () => {
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.find('span')).to.have.length(0);
  });

  it('should render a span element if the error prop is passed', () => {
    props.error = 'error';
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<span>error</span>)).to.equal(true);
    props.error = null;
  });

  it('should pass the value of the label prop to the label element', () => {
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<label htmlFor="name" >label</label>)).to.equal(true);
  });

  it('should call input onChange function', () => {
    const spy = sinon.spy();
    props.onChange = spy;
    const wrapper = shallow(<Slider {...props} />).dive().dive();

    wrapper.find('input').simulate('change', { target: { value: 'value' } });
    expect(spy).to.have.callCount(1);
    props.onChange = () => {};
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Slider {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(
      props.style, props.disabled
    );
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Slider {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });

  it('should get filled styles', () => {
    const spy = sinon.spy(getStyles, 'filled');

    shallow(<Slider {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(
      props.color, percentage
    );
  });

  it('should get remaining styles', () => {
    const spy = sinon.spy(getStyles, 'remaining');

    shallow(<Slider {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(percentage);
  });

  it('should get button styles', () => {
    const spy = sinon.spy(getStyles, 'button');

    shallow(<Slider {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(
      props.color, percentage
    );
  });
});
