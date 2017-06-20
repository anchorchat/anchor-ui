/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Table from '../../src/table';
import getStyles from '../../src/table/get-styles';

chai.use(sinonChai);

describe('Table', () => {
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

  it('should always render a table element', () => {
    const wrapper = shallow(<Table {...props} >{children}</Table>);

    expect(wrapper.find('table')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Table {...props} >{children}</Table>);

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Table {...props} >{children}</Table>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
