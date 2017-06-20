/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Tab from '../../src/tab';
import getStyles from '../../src/tab/get-styles';

chai.use(sinonChai);

describe('Tab', () => {
  const props = {
    icon: null,
    label: 'label',
    selected: false,
    onClick: () => {},
    style: { root: true },
    labelStyle: { label: true },
    iconStyle: { icon: true },
    badge: null,
    badgeStyle: { badge: true },
    activeStyle: { active: true },
    activeLabelStyle: { activeLabel: true },
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Tab {...props} />).dive().dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a span element', () => {
    const wrapper = shallow(<Tab {...props} />).dive().dive();

    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should not render a div element if the icon prop is not passed', () => {
    const wrapper = shallow(<Tab {...props} />).dive().dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the icon prop is passed', () => {
    props.icon = <span />;
    const wrapper = shallow(<Tab {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<div><span /></div>)).to.equal(true);
    props.icon = null;
  });

  it('should not render a div element if the badge prop is not passed', () => {
    const wrapper = shallow(<Tab {...props} />).dive().dive();

    expect(wrapper.find('div')).to.have.length(0);
  });

  it('should render a div element if the badge prop is passed', () => {
    props.badge = <span />;
    const wrapper = shallow(<Tab {...props} />).dive().dive();

    expect(wrapper.containsMatchingElement(<div><span /></div>)).to.equal(true);
    props.badge = null;
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Tab {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(
      props.color, props.selected, props.style, props.activeStyle
    );
  });

  it('should get icon styles', () => {
    props.icon = <span />;
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Tab {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(
      props.selected, props.iconStyle
    );
    props.icon = null;
  });

  it('should get label styles', () => {
    const spy = sinon.spy(getStyles, 'label');

    shallow(<Tab {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(
      props.selected, props.labelStyle, props.activeLabelStyle
    );
  });

  it('should get badge styles', () => {
    props.badge = <span />;
    const spy = sinon.spy(getStyles, 'badge');

    shallow(<Tab {...props} />).dive().dive();
    expect(spy).to.have.been.calledWith(props.badgeStyle);
    props.badge = null;
  });
});
