/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TableColumn from '../../src/table-column';
import getStyles from '../../src/table-column/get-styles';

chai.use(sinonChai);

describe('TableColumn', () => {
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

  it('should always render a td element', () => {
    const wrapper = shallow(<TableColumn {...props} >{children}</TableColumn>);

    expect(wrapper.find('td')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<TableColumn {...props} >{children}</TableColumn>);

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<TableColumn {...props} >{children}</TableColumn>);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
