/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import RadioButtonGroup from '../../src/radio-button-group';
import getStyles from '../../src/radio-button-group/get-styles';

chai.use(sinonChai);

describe('RadioButtonGroup', () => {
  const props = {
    style: { root: true },
    inputStyle: { input: true },
    iconStyle: { icon: true },
    labelStyle: { label: true },
    errorStyle: { error: true },
    checked: false,
    onChange: () => {},
    error: null,
    value: 1,
    children: <p>text</p>,
    label: null
  };
  const childrenWithProps = props.children;
  const label = 'text';
  const error = 'text';

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<RadioButtonGroup {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(2);
  });

  it('should always render the value of the childrenWithProps prop', () => {
    const wrapper = shallow(<RadioButtonGroup {...props} >{childrenWithProps}</RadioButtonGroup>);

    expect(wrapper.contains(childrenWithProps)).to.equal(true);
  });

  it('should always render the value of the label prop', () => {
    const wrapper = shallow(<RadioButtonGroup {...props} >{label}</RadioButtonGroup>);

    expect(wrapper.contains(label)).to.equal(true);
  });

  it('should always render the value of the error prop', () => {
    const wrapper = shallow(<RadioButtonGroup {...props} >{error}</RadioButtonGroup>);

    expect(wrapper.contains(error)).to.equal(true);
  });

  it('should render a span element if the label prop is passed', () => {
    let wrapper = shallow(<RadioButtonGroup {...props} />).dive();

    expect(wrapper.find('span')).to.have.length(0);

    props.label = 'text';
    wrapper = shallow(<RadioButtonGroup {...props} />).dive();

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<span>text</span>)).to.equal(true);
    props.label = null;
  });

  it('should render a span element if the error prop is passed', () => {
    let wrapper = shallow(<RadioButtonGroup {...props} />).dive();

    expect(wrapper.find('span')).to.have.length(0);

    props.error = 'text';
    wrapper = shallow(<RadioButtonGroup {...props} />).dive();

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<span>text</span>)).to.equal(true);
    props.error = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<RadioButtonGroup {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');
    props.label = 'text';

    shallow(<RadioButtonGroup {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.labelStyle);
    props.label = null;
  });

  it('should get error styles', () => {
    const spy = sinon.spy(getStyles, 'error');
    props.error = 'text';

    shallow(<RadioButtonGroup {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.errorStyle);
    props.error = null;
  });
});
