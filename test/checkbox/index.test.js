/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Checkbox from '../../src/checkbox';
import IconCheckbox from '../../src/icons/icon-checkbox';
import getStyles from '../../src/checkbox/get-styles';

chai.use(sinonChai);

describe('Checkbox', () => {
  const props = {
    label: 'label',
    name: 'name',
    onChange: () => {},
    checked: false,
    style: { root: true },
    inputStyle: { input: true },
    iconStyle: { icon: true },
    labelStyle: { label: true },
    value: 'value',
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a label element', () => {
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should always render a input element', () => {
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should always render a div element', () => {
    props.checked = true;
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.find('div')).to.have.length(1);
    props.checked = false;
  });

  it('should always render a span element', () => {
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should render a div element if the value of the checked prop is false', () => {
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.find(IconCheckbox)).to.have.length(0);
  });

  it('should render an IconCheckbox if the value of the checked prop is true', () => {
    props.checked = true;
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find(IconCheckbox)).to.have.length(1);
    props.checked = false;
  });

  it('should pass the value of the label prop to the span element', () => {
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<span>label</span>)).to.equal(true);
  });

  it('should call input onChange function', () => {
    const spy = sinon.spy();
    props.onChange = spy;
    const wrapper = shallow(<Checkbox {...props} />).dive().dive();

    wrapper.find('input').simulate('change', { currentTarget: { value: 'value' } });
    expect(spy).to.have.callCount(1);
    props.onChange = () => {};
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Checkbox {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.color, props.style);
  });

  it('should get input styles', () => {
    const spy = sinon.spy(getStyles, 'input');

    shallow(<Checkbox {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.inputStyle);
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Checkbox {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Checkbox {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });
});
