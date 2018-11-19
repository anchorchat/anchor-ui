/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import DateSeparator from '../../src/message-separator/component';
import getStyles from '../../src/message-separator/get-styles';

chai.use(sinonChai);

describe('DateSeparator', () => {
  const props = {
    text: '2 Dec',
    style: {},
    textStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render root elememts', () => {
    const component = shallow(<DateSeparator {...props} />);

    expect(component.find('section')).to.have.length(1);
    expect(component.find('p')).to.have.length(1);
    expect(component.find('p').containsMatchingElement('2 Dec')).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<DateSeparator {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<DateSeparator {...props} />);
    expect(spy).to.have.been.calledWith(props.textStyle);
  });
});
