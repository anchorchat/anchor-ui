/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { Style } from 'radium';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Input from '../../src/input/component';
import getStyles from '../../src/input/get-styles';

chai.use(sinonChai);

describe('Input', () => {
  const props = {
    onChange: () => {},
    value: 1,
    name: '',
    style: {},
    inputStyle: {},
    labelStyle: {},
    errorStyle: {},
    placeholderStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf Input', () => {
    const component = shallow(<Input {...props} />);

    expect(component.instance()).to.be.instanceOf(Input);
  });

  it('should render root elements', () => {
    const component = shallow(<Input {...props} />);

    expect(component.find('section')).to.have.length(1);
    expect(component.find('label')).to.have.length(1);
    expect(component.find('input')).to.have.length(1);
    expect(component.find(Style)).to.have.length(1);
  });

  it('should render error elements', () => {
    const component = shallow(<Input {...props} />);

    expect(component.find('span')).to.have.length(0);

    component.setProps({ error: 'Text' });
    expect(component.find('span')).to.have.length(1);
    expect(component.containsMatchingElement(<span>Text</span>)).to.equal(true);

    component.setProps({ error: <span>Node</span> });
    expect(component.find('span')).to.have.length(2);
    expect(component.find('span > span')).to.have.length(1);
    expect(component.find('span').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render multiLine input', () => {
    const component = shallow(<Input {...props} />);

    expect(component.find('textarea')).to.have.length(0);
    expect(component.find('input')).to.have.length(1);

    component.setProps({ multiLine: true });
    expect(component.find('textarea')).to.have.length(1);
    expect(component.find('input')).to.have.length(0);
  });

  it('should call input onChange function', () => {
    const spy = sinon.spy();
    const component = shallow(<Input {...props} />);

    component.setProps({ onChange: spy });
    component.find('input').simulate('change');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Input {...props} />);
    expect(spy).to.have.been.calledWith(false, props.style);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Input {...props} />);
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });

  it('should get input styles', () => {
    const spy = sinon.spy(getStyles, 'input');

    shallow(<Input {...props} />);
    expect(spy).to.have.been.calledWith(null, props.inputStyle);
  });

  it('should get placeholder styles', () => {
    const spy = sinon.spy(getStyles, 'placeholder');

    shallow(<Input {...props} />);
    expect(spy).to.have.been.calledWith(props.placeholderStyle);
  });

  it('should get error styles', () => {
    const spy = sinon.spy(getStyles, 'error');
    const combinedProps = {
      ...props,
      error: 'Text'
    };

    shallow(<Input {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.errorStyle);
  });

  it('should get inputRoot styles', () => {
    const spy = sinon.spy(getStyles, 'inputRoot');
    const combinedProps = {
      ...props,
      multiLine: true
    };

    shallow(<Input {...combinedProps} />);
    expect(spy).to.have.been.calledWith(32);
  });

  it('should get textarea styles', () => {
    const spy = sinon.spy(getStyles, 'textarea');
    const combinedProps = {
      ...props,
      multiLine: true
    };

    shallow(<Input {...combinedProps} />);
    expect(spy).to.have.been.calledWith(null, props.inputStyle);
  });
});
