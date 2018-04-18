/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import RadioButton from '../../src/radio-button/component';
import getStyles from '../../src/radio-button/get-styles';

chai.use(sinonChai);

describe('RadioButton', () => {
  const props = {
    style: { root: true },
    inputStyle: { input: true },
    iconStyle: { icon: true },
    labelStyle: { label: true },
    checked: false,
    onChange: null,
    color: '#1BA6C4',
    label: null
  };
  const label = 'text';

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a label element', () => {
    const wrapper = shallow(<RadioButton {...props} />);

    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should always render an input element', () => {
    const wrapper = shallow(<RadioButton {...props} />);

    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should always render a div element', () => {
    const wrapper = shallow(<RadioButton {...props} />);

    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render a span element if the label prop is passed', () => {
    let wrapper = shallow(<RadioButton {...props} />);

    expect(wrapper.find('span')).to.have.length(0);

    props.label = 'text';
    wrapper = shallow(<RadioButton {...props} />);

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<span>text</span>)).to.equal(true);
    props.label = null;
  });

  it('should always render the value of the label prop', () => {
    const wrapper = shallow(<RadioButton {...props} >{label}</RadioButton>);

    expect(wrapper.contains(label)).to.equal(true);
  });

  it('should call input onChange function', () => {
    const spy = sinon.spy();
    props.onChange = spy;
    const wrapper = shallow(<RadioButton {...props} />);

    wrapper.find('input').simulate('change');
    expect(spy).to.have.callCount(1);
    props.onChange = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<RadioButton {...props} />);
    expect(spy).to.have.been.calledWith(props.color, props.style);
  });

  it('should get input styles', () => {
    const spy = sinon.spy(getStyles, 'input');

    shallow(<RadioButton {...props} />);
    expect(spy).to.have.been.calledWith(props.inputStyle);
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<RadioButton {...props} />);
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');
    props.label = 'text';

    shallow(<RadioButton {...props} />);
    expect(spy).to.have.been.calledWith(props.labelStyle);

    props.label = null;
  });
});
