/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import AdminBadge from '../../src/admin-badge/component';
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

  it('should be an instanceOf AdminBadge', () => {
    const component = shallow(<AdminBadge {...props} />);

    expect(component.instance()).to.be.instanceOf(AdminBadge);
  });

  it('should render a span element', () => {
    const component = shallow(<AdminBadge {...props} />);

    expect(component.find('span')).to.have.length(1);
  });

  it('should render text in span element', () => {
    const component = shallow(<AdminBadge {...props} />);

    expect(component.containsMatchingElement(<span>Admin</span>)).to.equal(true);
  });

  it('should render span in span element', () => {
    const combinedProps = {
      ...props,
      text: <span>Node</span>
    };
    const component = shallow(<AdminBadge {...combinedProps} />);

    expect(component.find('span > span')).to.have.length(1);
    expect(component.find('span').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<AdminBadge {...props} />);
    expect(spy).to.have.been.calledWith(
      props.color, props.inverted, props.style
    );
  });
});
