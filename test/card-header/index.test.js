/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CardHeader from '../../src/card-header/component';
import Avatar from '../../src/avatar';
import getStyles from '../../src/card-header/get-styles';

chai.use(sinonChai);

describe('CardHeader', () => {
  const props = {
    style: {},
    titleStyle: {},
    title: '',
    subtitleStyle: {},
    subtitle: '',
    avatar: '',
    avatarStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a header element containing a div and h1 elements', () => {
    const component = shallow(<CardHeader {...props} />);

    expect(component.find('header')).to.have.length(1);
    expect(component.find('div')).to.have.length(1);
    expect(component.find('h1')).to.have.length(1);
  });

  it('should render title', () => {
    const component = shallow(<CardHeader {...props} />);

    component.setProps({ title: 'Title' });
    expect(component.find('h1')).to.have.length(1);
    expect(component.containsMatchingElement(<h1>Title</h1>)).to.equal(true);

    component.setProps({ title: <span>Node</span> });
    expect(component.find('h1 > span')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render subtitle', () => {
    const component = shallow(<CardHeader {...props} />);

    expect(component.find('h2')).to.have.length(0);

    component.setProps({ subtitle: 'subtitle' });
    expect(component.find('h2')).to.have.length(1);
    expect(component.containsMatchingElement(<h2>subtitle</h2>)).to.equal(true);

    component.setProps({ subtitle: <span>Node</span> });
    expect(component.find('h2 > span')).to.have.length(1);
    expect(component.find('h2').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render avatar', () => {
    const component = shallow(<CardHeader {...props} />);

    expect(component.find(Avatar)).to.have.length(0);

    component.setProps({ avatar: 'image' });
    expect(component.find(Avatar)).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<CardHeader {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get title styles', () => {
    const spy = sinon.spy(getStyles, 'title');

    shallow(<CardHeader {...props} />);
    expect(spy).to.have.been.calledWith(props.titleStyle);
  });

  it('should get subtitle styles', () => {
    const spy = sinon.spy(getStyles, 'subtitle');
    const combinedProps = {
      ...props,
      subtitle: 'subtitle'
    };

    shallow(<CardHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.subtitleStyle);
  });

  it('should get avatar styles', () => {
    const spy = sinon.spy(getStyles, 'avatar');
    const combinedProps = {
      ...props,
      avatar: 'image'
    };

    shallow(<CardHeader {...combinedProps} />);
    expect(spy).to.have.been.calledWith(props.avatarStyle);
  });
});
