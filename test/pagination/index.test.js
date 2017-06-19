/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Pagination from '../../src/pagination';
import getStyles from '../../src/pagination/get-styles';

chai.use(sinonChai);

describe('Pagination', () => {
  const props = {
    initialPage: 1,
    pageSize: 10,
    style: { root: true },
    navStyle: { nav: true },
    navButtonStyle: { navButton: true },
    iconButtonStyle: { iconButton: true },
    position: 'top',
    jumpToPage: 1,
    onChange: () => {},
    list: null,
    children: null
  };
  const children = <p>children</p>;
  const position = 'top';


  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a div element', () => {
    const wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render the value of the children prop', () => {
    const wrapper = shallow(<Pagination {...props} >{children}</Pagination>);

    expect(wrapper.contains(children)).to.equal(true);
  });

  it('should not render an position if the position prop is not passed', () => {
    props.position = null;
    const wrapper = shallow(<Pagination {...props}>{position}</Pagination>);

    expect(wrapper.find(position)).to.have.length(0);
    props.position = 'top';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Pagination {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
