/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Card from '../../src/card/component';
import getStyles from '../../src/card/get-styles';

chai.use(sinonChai);

describe('Card', () => {
  const props = {
    style: {}
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a section element', () => {
    const component = shallow(<Card {...props}>{children}</Card>);

    expect(component.find('section')).to.have.length(1);
  });

  it('should render children', () => {
    const component = shallow(<Card {...props}>{children}</Card>);

    expect(component.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Card {...props}>{children}</Card>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
