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
    rightButton: null,
    color: '#1BA6C4',
    text: '',
    onClick: () => {}
  };
  const text = 'text';
  const onClick = () => {};

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<MenuItem {...props}>{onClick}</MenuItem>).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a p element', () => {
    const wrapper = shallow(<MenuItem {...props}>{text}</MenuItem>).dive();

    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should always render the value of the text prop', () => {
    const wrapper = shallow(<MenuItem {...props} >{text}</MenuItem>);

    expect(wrapper.contains(text)).to.equal(true);
  });

  it('should render a div element if the icon prop is passed', () => {
    let wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);

    props.icon = 'text';
    wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<div>text</div>)).to.equal(true);
    props.icon = null;
  });

  it('should render a div element if the rightButton prop is passed', () => {
    let wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);

    props.rightButton = 'text';
    wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<div>text</div>)).to.equal(true);
    props.rightButton = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<MenuItem {...props} />).dive();
    expect(spy).to.have.been.calledWith(
      props.color, props.icon, props.active, props.rightButton, props.style
    );
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');
    props.icon = 'text';

    shallow(<MenuItem {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
    props.icon = null;
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<MenuItem {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.textStyle);
  });

  it('should get rightButton styles', () => {
    const spy = sinon.spy(getStyles, 'rightButton');
    props.rightButton = 'text';

    shallow(<MenuItem {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.iconStyle);
    props.rightButton = null;
  });
});
