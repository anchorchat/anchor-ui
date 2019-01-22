/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TableRow from '../../src/table-row';
import getStyles from '../../src/table-row/get-styles';

chai.use(sinonChai);

describe('TableRow', () => {
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

  it('should always render a tr element', () => {
    const wrapper = shallow(<TableRow {...props}>{children}</TableRow>);

    expect(wrapper.find('tr')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<TableRow {...props}>{children}</TableRow>);

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<TableRow {...props}>{children}</TableRow>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
