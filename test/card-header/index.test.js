/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CardHeader from '../../src/card-header';
import getStyles from '../../src/card-header/get-styles';

chai.use(sinonChai);

describe('CardHeader', () => {
  const props = {
    style: { root: true },
    titleStyle: { title: true },
    title: '',
    subtitleStyle: { subtitle: true },
    subtitle: '',
    avatar: '',
    avatarStyle: { avatar: true }
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a header element', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('header')).to.have.length(1);
  });

  it('should always render a div element', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should always render a h1 element', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should not render a h2 element if the subtitle prop is not passed', () => {
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('h2')).to.have.length(0);
  });

  it('should render a h2 element if the subtitle prop is passed', () => {
    props.subtitle = 'text';
    const wrapper = shallow(<CardHeader {...props} />).dive();

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<h2>text</h2>)).to.equal(true);
    props.subtitle = '';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get title styles', () => {
    const spy = sinon.spy(getStyles, 'title');

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.titleStyle);
  });

  it('should get subtitle styles', () => {
    const spy = sinon.spy(getStyles, 'subtitle');
    props.subtitle = 'text';

    shallow(<CardHeader {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.subtitleStyle);
    props.subtitle = '';
  });
});
