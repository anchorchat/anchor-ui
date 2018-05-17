/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EventListener from 'react-event-listener';
import noop from 'lodash/noop';
import EmojiFilter from '../../src/emoji-filter/component';
import EmojiModifiers from '../../src/emoji-menu/emoji-modifiers';
import getStyles from '../../src/emoji-filter/get-styles';

chai.use(sinonChai);

describe('EmojiFilter', () => {
  const props = {
    value: '',
    style: {},
    headerStyle: {},
    onSelect: noop,
    onChange: noop,
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render root elements', () => {
    const component = shallow(<EmojiFilter {...props} />);

    expect(component.find('section')).to.have.length(0);
    expect(component.find(EmojiModifiers)).to.have.length(0);
    expect(component.find(EventListener)).to.have.length(0);

    component.setState({ open: true });
    expect(component.find('section')).to.have.length(2);
    expect(component.find(EmojiModifiers)).to.have.length(1);
    expect(component.find(EventListener)).to.have.length(1);
  });

  it('should render emoji elements', () => {
    const emoji = [
      { shortname: ':poop:' },
      { shortname: ':poodle:' }
    ];
    const component = shallow(<EmojiFilter {...props} />);

    component.setState({ open: true, emoji });
    expect(component.find('section > div')).to.have.length(2);
    expect(component.find('section > div > img')).to.have.length(2);
  });

  it('should call onSelect', () => {
    const emoji = [
      { shortname: ':poop:' }
    ];
    const spy = sinon.spy();
    const component = shallow(<EmojiFilter {...props} />);

    component.setProps({ onSelect: spy });
    component.setState({ open: true, emoji });
    component.find('section > div').simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const component = shallow(<EmojiFilter {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get header styles', () => {
    const spy = sinon.spy(getStyles, 'header');
    const component = shallow(<EmojiFilter {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.been.calledWith(props.headerStyle);
  });

  it('should get commands styles', () => {
    const spy = sinon.spy(getStyles, 'commands');
    const component = shallow(<EmojiFilter {...props} />);

    component.setState({ open: true });
    expect(spy).to.have.callCount(1);
  });

  it('should get emoji styles', () => {
    const spy = sinon.spy(getStyles, 'emoji');
    const emoji = [
      { shortname: ':poop:' }
    ];
    const component = shallow(<EmojiFilter {...props} />);

    component.setState({ open: true, emoji });
    expect(spy).to.have.been.calledWith(props.color, false);
  });
});
