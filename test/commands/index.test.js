/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Commands from '../../src/commands/component';
import getStyles from '../../src/commands/get-styles';

chai.use(sinonChai);

describe('Commands', () => {
  const props = {
    commands: [
      { value: 'gif', prefix: '/' },
      { value: 'me', prefix: '@' }
    ],
    value: '',
    style: {},
    headerStyle: {},
    titleStyle: {},
    commandStyle: {},
    descriptionStyle: {},
    onSelect: () => {},
    onChange: () => {},
    leading: true,
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf Commands', () => {
    const component = shallow(<Commands {...props} />);

    expect(component.instance()).to.be.instanceOf(Commands);
  });

  it('should render root elements', () => {
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(component.find('section')).to.have.length(2);
    expect(component.find('header')).to.have.length(1);
  });

  it('should render command elements', () => {
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(component.find('span')).to.have.length(2);
    expect(component.find('span > strong')).to.have.length(2);

    component.setProps({ value: '/' });
    expect(component.find('span')).to.have.length(1);
    expect(component.find('span > strong')).to.have.length(1);
  });

  it('should render command avatar element', () => {
    const combinedProps = {
      ...props,
      commands: [
        { value: 'me', prefix: '@', avatar: 'image' }
      ]
    };
    const component = shallow(<Commands {...combinedProps} />);

    component.setState({ open: true });
    expect(component.find('span')).to.have.length(1);
    expect(component.find('span > strong')).to.have.length(1);
    expect(component.find('span > div > Avatar')).to.have.length(1);
  });

  it('should render command param element', () => {
    const combinedProps = {
      ...props,
      commands: [
        { value: 'gif', prefix: '/', param: 'text' }
      ]
    };
    const component = shallow(<Commands {...combinedProps} />);

    component.setState({ open: true });
    expect(component.find('span')).to.have.length(2);
    expect(component.find('span > strong')).to.have.length(1);
    expect(component.find('span > span')).to.have.length(1);
    expect(component.find('span > span').containsMatchingElement('text')).to.equal(true);
  });

  it('should render command description element', () => {
    const combinedProps = {
      ...props,
      commands: [
        { value: 'me', prefix: '@', description: 'mention user' }
      ]
    };
    const component = shallow(<Commands {...combinedProps} />);

    component.setState({ open: true });
    expect(component.find('span')).to.have.length(2);
    expect(component.find('span > strong')).to.have.length(1);
    expect(component.find('div > span')).to.have.length(2);
    expect(component.find('div > span').containsMatchingElement('mention user')).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get header styles', () => {
    const spy = sinon.spy(getStyles, 'header');
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.headerStyle);
  });

  it('should get commands styles', () => {
    const spy = sinon.spy(getStyles, 'commands');
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.callCount(1);
  });

  it('should get command styles', () => {
    const spy = sinon.spy(getStyles, 'command');
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.color, false, props.commandStyle);
  });

  it('should get title styles', () => {
    const spy = sinon.spy(getStyles, 'title');
    const component = shallow(<Commands {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.titleStyle);
  });

  it('should get description styles', () => {
    const spy = sinon.spy(getStyles, 'description');
    const combinedProps = {
      ...props,
      commands: [{ value: 'gif', prefix: '/', description: 'send gifs' }]
    };
    const component = shallow(<Commands {...combinedProps} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.descriptionStyle);
  });
});
