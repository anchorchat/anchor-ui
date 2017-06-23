/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import AdminBadge from '../../src/admin-badge';
import getStyles from '../../src/admin-badge/get-styles';

chai.use(sinonChai);

describe('AdminBadge', () => {
  const props = {
    text: 'Admin',
    style: { root: true },
    inverted: false,
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a span element', () => {
    const wrapper = shallow(<AdminBadge {...props} />).dive().dive();

    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should pass the text prop to the span element', () => {
    const wrapper = shallow(<AdminBadge {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<span>Admin</span>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<AdminBadge {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.color, props.inverted, props.style);
  });
});
