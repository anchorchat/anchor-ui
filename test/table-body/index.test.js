/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TableBody from '../../src/table-body';
import getStyles from '../../src/table-body/get-styles';

chai.use(sinonChai);

describe('TableBody', () => {
  const props = {
    style: { root: true }
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a tbody element', () => {
    const wrapper = shallow(<TableBody {...props}>{children}</TableBody>);

    expect(wrapper.find('tbody')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<TableBody {...props}>{children}</TableBody>);

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<TableBody {...props}>{children}</TableBody>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
