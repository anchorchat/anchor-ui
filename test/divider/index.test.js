/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Divider from '../../src/divider/component';
import getStyles from '../../src/divider/get-styles';

chai.use(sinonChai);

describe('Divider', () => {
  const props = {
    style: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render divider element', () => {
    const component = shallow(<Divider {...props} />);

    expect(component.find('hr')).to.have.length(1);
  });

  it('should render h1 divider element', () => {
    const component = shallow(<Divider {...props} />);

    expect(component.find('hr')).to.have.length(1);
    expect(component.find('h1')).to.have.length(0);

    component.setProps({ text: 'text' });
    expect(component.find('hr')).to.have.length(0);
    expect(component.find('h1')).to.have.length(1);
    expect(component.containsMatchingElement(<h1>text</h1>)).to.equal(true);

    component.setProps({ text: <span>node</span> });
    expect(component.find('hr')).to.have.length(0);
    expect(component.find('h1')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>node</span>)).to.equal(true);
  });

  it('should get hr styles', () => {
    const spy = sinon.spy(getStyles, 'hr');

    shallow(<Divider {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get text styles', () => {
    const combinedProps = {
      ...props,
      text: 'text'
    };
    const spy = sinon.spy(getStyles, 'text');

    shallow(<Divider {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
