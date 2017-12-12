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
    style: { root: true },
    textStyle: { text: true },
    iconStyle: { icon: true },
    buttonStyle: { button: true },
    closeMenu: null,
    rightButton: null,
    color: '#1BA6C4',
    text: 'text',
    onClick: () => {}
  };

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

  it('should not render a div element if the icon prop is not passed', () => {
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the icon prop is passed', () => {
    props.icon = <span />;
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.containsMatchingElement(<div><span /></div>)).to.equal(true);
    props.icon = null;
  });

  it('should always render a p element', () => {
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should pass the text prop to the p element', () => {
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.containsMatchingElement(<p>text</p>)).to.equal(true);
  });

  it('should not render a div element if the rightButton prop is not passed', () => {
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the rightButton prop is passed', () => {
    props.rightButton = <button />;
    const wrapper = shallow(<MenuItem {...props} />).dive();

    expect(wrapper.containsMatchingElement(<div><button /></div>)).to.equal(true);
    props.rightButton = null;
  });

  it('should call section onClick function', () => {
    const spy = sinon.spy();
    props.onClick = spy;
    const wrapper = shallow(<MenuItem {...props} />).dive();

    wrapper.find('section').simulate('click');
    expect(spy).to.have.callCount(1);
    props.onClick = () => {};
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<MenuItem {...props} />).dive();
    expect(spy).to.have.been.calledWith(
      props.color,
      props.icon,
      props.active,
      props.rightButton,
      props.style
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
    expect(spy).to.have.been.calledWith(props.buttonStyle);
    props.rightButton = null;
  });
});
