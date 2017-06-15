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
    header: null,
    style: {},
    headerStyle: {},
    listRef: () => {},
    open: true,
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render an ul element', () => {
    const wrapper = shallow(<List {...props}>{children}</List>).dive();

    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should always render the value of the children prop', () => {
    const wrapper = shallow(<List {...props} >{children}</List>);

    expect(wrapper.contains(children)).to.equal(true);
  });

  it('should render a h1 element if the header prop is passed', () => {
    let wrapper = shallow(<List {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(0);

    props.header = 'text';
    wrapper = shallow(<List {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<h1>text</h1>)).to.equal(true);
    props.header = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<List {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get listHeader styles', () => {
    const spy = sinon.spy(getStyles, 'listHeader');
    props.header = 'text';

    shallow(<List {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.headerStyle);
    props.header = {};
  });
});
