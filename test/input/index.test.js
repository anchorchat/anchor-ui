/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Input from '../../src/input';
import getStyles from '../../src/input/get-styles';

chai.use(sinonChai);

describe('Input', () => {
  const props = {
    onChange: () => {},
    value: 1,
    type: 'text',
    placeholder: '',
    label: '',
    name: '',
    style: { root: true },
    inputStyle: { input: true },
    labelStyle: { label: true },
    maxLength: 500,
    inputRef: null,
    disabled: false,
    error: '',
    errorStyle: { error: true },
    placeholderStyle: { placeholder: true }
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Input {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a label element', () => {
    const wrapper = shallow(<Input {...props} />).dive();

    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should always render an input element', () => {
    const wrapper = shallow(<Input {...props} />).dive();

    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should always render a Style element', () => {
    const wrapper = shallow(<Input {...props} />).dive();

    expect(wrapper.find('Style')).to.have.length(1);
  });

  it('should always render the value of the error prop', () => {
    props.error = <span>text</span>;
    const wrapper = shallow(<Input {...props} />).dive();

    expect(wrapper.find('span')).to.have.length(2);
    expect(wrapper.containsMatchingElement(<span>text</span>)).to.equal(true);
    props.error = '';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Input {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.disabled, props.style);
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Input {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.labelStyle);
  });

  it('should get input styles', () => {
    const spy = sinon.spy(getStyles, 'input');

    shallow(<Input {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.error, props.inputStyle);
  });

  it('should get error styles', () => {
    const spy = sinon.spy(getStyles, 'error');
    props.error = 'error';

    shallow(<Input {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.errorStyle);
    props.error = null;
  });
});
