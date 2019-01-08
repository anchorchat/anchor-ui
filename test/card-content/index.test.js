/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CardContent from '../../src/card-content/component';
import getStyles from '../../src/card-content/get-styles';

chai.use(sinonChai);

describe('CardContent', () => {
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
    const component = shallow(<CardContent {...props}>{children}</CardContent>);

    expect(component.find('section')).to.have.length(1);
  });

  it('should render children', () => {
    const component = shallow(<CardContent {...props}>{children}</CardContent>);

    expect(component.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardContent {...props}>{children}</CardContent>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
