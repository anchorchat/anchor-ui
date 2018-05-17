/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';
import CheckboxGroup from '../../src/checkbox-group/component';
import Checkbox from '../../src/checkbox';
import getStyles from '../../src/checkbox-group/get-styles';

chai.use(sinonChai);

describe('CheckboxGroup', () => {
  const props = {
    values: [],
    onChange: noop,
    label: 'Label',
    style: {},
    labelStyle: {},
    buttonStyle: {},
    errorStyle: {}
  };
  const checkboxProps = {
    value: 'one',
    name: 'one',
    label: 'one'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render root elements', () => {
    const component = shallow(<CheckboxGroup {...props}><Checkbox {...checkboxProps} /></CheckboxGroup>); // eslint-disable-line max-len

    expect(component.find('section')).to.have.length(2);
    expect(component.find('span')).to.have.length(1);
    expect(component.find(Checkbox)).to.have.length(1);
  });

  it('should render error element', () => {
    const component = shallow(<CheckboxGroup {...props}><Checkbox {...checkboxProps} /></CheckboxGroup>); // eslint-disable-line max-len

    expect(component.find('span')).to.have.length(1);

    component.setProps({ error: 'Text' });
    expect(component.find('span')).to.have.length(2);
    expect(component.containsMatchingElement(<span>Text</span>)).to.equal(true);

    component.setProps({ error: <span>Node</span> });
    expect(component.find('span')).to.have.length(3);
    expect(component.find('span').at(1).containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<CheckboxGroup {...props}><Checkbox {...checkboxProps} /></CheckboxGroup>);
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });

  it('should get buttons styles', () => {
    const spy = sinon.spy(getStyles, 'buttons');

    shallow(<CheckboxGroup {...props}><Checkbox {...checkboxProps} /></CheckboxGroup>);
    expect(spy).to.have.been.calledWith(props.buttonStyle);
  });

  it('should get error styles', () => {
    const spy = sinon.spy(getStyles, 'error');
    const combinedProps = {
      ...props,
      error: 'Text'
    };

    shallow(<CheckboxGroup {...combinedProps}><Checkbox {...checkboxProps} /></CheckboxGroup>);
    expect(spy).to.have.been.calledWith(props.errorStyle);
  });
});
