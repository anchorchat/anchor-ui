/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import MenuItem from '../../src/menu-item';
import getStyles from '../../src/menu-item/get-styles';

chai.use(sinonChai);

describe('MenuItem', () => {
  const props = {
    icon: null,
    active: false,
    style: {},
    textStyle: {},
    iconStyle: {},
    closeMenu: null,
    rightButton: null
  };
  const text = 'text';

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a p element', () => {
    const wrapper = shallow(<MenuItem {...props}>{text}</MenuItem>).dive();

    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should render a div element if the icon prop is passed', () => {
    let wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);

    props.icon = 'text';
    wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<div>text</div>)).to.equal(true);
    props.icon = {};
  });

  // it('should render a div element if the rightButton prop is passed', () => {
  //   let wrapper = shallow(<MenuItem {...props} />).dive();
  //
  //   expect(wrapper.find('div')).to.have.length(0);
  //
  //   props.rightButton = 'text';
  //   wrapper = shallow(<MenuItem {...props} />).dive();
  //
  //   expect(wrapper.find('div')).to.have.length(1);
  //   expect(wrapper.containsMatchingElement(<div>text</div>)).to.equal(true);
  //   props.rightButton = {};
  // });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<MenuItem {...props} />).dive();
    expect(spy).to.have.been.calledWith(
      props.color, props.icon, props.active, props.style
    );
  });
});
