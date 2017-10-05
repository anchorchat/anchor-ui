/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Paper from '../../src/paper';
import getStyles from '../../src/paper/get-styles';

chai.use(sinonChai);

describe('Paper', () => {
  const props = {
    depth: 1,
    style: { root: true },
    children: ''
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Paper {...props} />);

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render the value of the children prop', () => {
    const wrapper = shallow(<Paper {...props} >{children}</Paper>);

    expect(wrapper.contains(children)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Paper {...props} />);
    expect(spy).to.have.been.calledWith(props.depth, props.style);
  });
});
