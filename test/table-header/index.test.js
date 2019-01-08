/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TableHeader from '../../src/table-header';
import getStyles from '../../src/table-header/get-styles';

chai.use(sinonChai);

describe('TableHeader', () => {
  const props = {
    style: { root: true },
    color: '#1BA6C4'
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a thead element', () => {
    const wrapper = shallow(<TableHeader {...props}>{children}</TableHeader>).dive();

    expect(wrapper.find('thead')).to.have.length(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<TableHeader {...props}>{children}</TableHeader>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<TableHeader {...props}>{children}</TableHeader>).dive();
    expect(spy).to.have.been.calledWith(props.color, props.style);
  });
});
