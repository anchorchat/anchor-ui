/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import List from '../../src/list';
import getStyles from '../../src/list/get-styles';

chai.use(sinonChai);

describe('List', () => {
  const props = {
    header: '',
    listRef: () => {},
    style: { root: true },
    headerStyle: { header: true },
    open: true
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should only render if the open prop equals true', () => {
    props.open = false;
    const wrapper = shallow(<List {...props}>{children}</List>).dive();

    expect(wrapper.find('ul')).to.have.length(0);
    props.open = true;
  });

  it('should always render an ul element', () => {
    const wrapper = shallow(<List {...props}>{children}</List>).dive();

    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should not render an h1 element if the header prop is not passed', () => {
    const wrapper = shallow(<List {...props}>{children}</List>).dive();

    expect(wrapper.find('h1')).to.have.length(0);
  });

  it('should render an h1 element if the header prop is passed', () => {
    props.header = 'header';
    const wrapper = shallow(<List {...props}>{children}</List>).dive();

    expect(wrapper.containsMatchingElement(<h1>header</h1>)).to.equal(true);
    props.header = null;
  });

  it('should render children', () => {
    const wrapper = shallow(<List {...props}>{children}</List>).dive();

    expect(wrapper.containsMatchingElement(<p>children</p>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<List {...props}>{children}</List>).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get listHeader styles', () => {
    props.header = 'text';
    const spy = sinon.spy(getStyles, 'listHeader');

    shallow(<List {...props}>{children}</List>).dive();
    expect(spy).to.have.been.calledWith(props.headerStyle);
    props.header = {};
  });
});
