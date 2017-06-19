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
    checked: false,
    onChange: null
  };

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
});
