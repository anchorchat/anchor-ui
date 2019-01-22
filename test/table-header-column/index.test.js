/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TableHeaderColumn from '../../src/table-header-column';
import getStyles from '../../src/table-header-column/get-styles';

chai.use(sinonChai);

describe('TableHeaderColumn', () => {
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

  it('should always render a th element', () => {
    const wrapper = shallow(<TableHeaderColumn {...props}>{children}</TableHeaderColumn>);

    expect(wrapper.find('th')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<TableHeaderColumn {...props}>{children}</TableHeaderColumn>);

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<TableHeaderColumn {...props}>{children}</TableHeaderColumn>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
