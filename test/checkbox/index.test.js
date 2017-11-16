/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Checkbox from '../../src/checkbox/component';
import IconCheckbox from '../../src/icons/icon-checkbox';
import getStyles from '../../src/checkbox/get-styles';

chai.use(sinonChai);

describe('Checkbox', () => {
  const props = {
    label: 'Label',
    name: 'name',
    onChange: () => {},
    checked: false,
    style: {},
    inputStyle: {},
    iconStyle: {},
    labelStyle: {},
    value: 'value',
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render default Checkbox elements', () => {
    const component = shallow(<Checkbox {...props} />);

    expect(component.find('label')).to.have.length(1);
    expect(component.find('input')).to.have.length(1);
    expect(component.find('div')).to.have.length(2);
    expect(component.find('span')).to.have.length(1);
  });

  it('should render IconCheckbox', () => {
    const component = shallow(<Checkbox {...props} />);

    expect(component.find(IconCheckbox)).to.have.length(0);
    expect(component.find('div > div')).to.have.length(1);

    component.setProps({ checked: true });
    expect(component.find(IconCheckbox)).to.have.length(1);
    expect(component.find('div > div')).to.have.length(0);
  });

  it('should render label', () => {
    const component = shallow(<Checkbox {...props} />);

    expect(component.find('span')).to.have.length(1);
    expect(component.find('span').containsMatchingElement(<span>Label</span>)).to.equal(true);

    component.setProps({ label: <span>Node</span> });
    expect(component.find('span > span')).to.have.length(1);
    expect(component.find('span > span').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should call input onChange function', () => {
    const spy = sinon.spy();
    const combinedProps = {
      ...props,
      onChange: spy
    };
    const component = shallow(<Checkbox {...combinedProps} />);

    component.find('input').simulate('change');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Checkbox {...props} />);
    expect(spy).to.have.been.calledWith(props.color, props.style);
  });

  it('should get input styles', () => {
    const spy = sinon.spy(getStyles, 'input');

    shallow(<Checkbox {...props} />);
    expect(spy).to.have.been.calledWith(props.inputStyle);
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Checkbox {...props} />);
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Checkbox {...props} />);
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });
});
