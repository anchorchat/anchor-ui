/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Divider from '../../src/divider';
import getStyles from '../../src/divider/get-styles';

chai.use(sinonChai);

describe('Divider', () => {
  const props = {
    text: 'text',
    style: { root: true }
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render an hr element if the text prop is not passed', () => {
    props.text = null;
    const wrapper = shallow(<Divider {...props} />);

    expect(wrapper.find('hr')).to.have.length(1);
    props.text = 'text';
  });

  it('should render an h1 element if the text prop is passed', () => {
    const wrapper = shallow(<Divider {...props} />);

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should pass the text prop to the h1 element', () => {
    const wrapper = shallow(<Divider {...props} />);

    expect(wrapper.containsMatchingElement(<h1>text</h1>)).to.equal(true);
  });

  it('should get hr styles', () => {
    props.text = null;
    const spy = sinon.spy(getStyles, 'hr');

    shallow(<Divider {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
    props.text = 'text';
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<Divider {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
