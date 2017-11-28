/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Badge from '../../src/badge/component';
import getStyles from '../../src/badge/get-styles';

chai.use(sinonChai);

describe('Badge', () => {
  const props = {
    value: 1,
    maxValue: 2,
    style: { root: true },
    inverted: false,
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a span element', () => {
    const component = shallow(<Badge {...props} />);

    expect(component.find('span')).to.have.length(1);
  });

  it('should render content element', () => {
    const component = shallow(<Badge {...props} />);

    expect(component.find('span').containsMatchingElement(1)).to.equal(true);
  });

  it('should render maxValue+ element', () => {
    const combinedProps = {
      ...props,
      value: 3
    };

    const component = shallow(<Badge {...combinedProps} />);

    expect(component.find('span').containsMatchingElement('2+')).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Badge {...props} />);
    expect(spy).to.have.been.calledWith(
      props.color,
      props.inverted,
      props.style
    );
  });
});
