/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EventListener from 'react-event-listener';
import EmojiMenu from '../../src/emoji-menu/component';
import EmojiModifiers from '../../src/emoji-menu/emoji-modifiers';
import EmojiCategory from '../../src/emoji-menu/emoji-category';
import EmojiCategories from '../../src/emoji-menu/emoji-categories';
import getStyles from '../../src/emoji-menu/get-styles';

chai.use(sinonChai);

describe('EmojiFilter', () => {
  const props = {
    style: {},
    hideMenu: () => {},
    sendEmoji: () => {},
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf AdminBadge', () => {
    const component = shallow(<EmojiMenu {...props} />);

    expect(component.instance()).to.be.instanceOf(EmojiMenu);
  });

  it('should render root elements', () => {
    const component = shallow(<EmojiMenu {...props} />);

    expect(component.find('section')).to.have.length(0);
    expect(component.find(EmojiModifiers)).to.have.length(0);
    expect(component.find(EmojiCategory)).to.have.length(0);
    expect(component.find(EmojiCategories)).to.have.length(0);
    expect(component.find(EventListener)).to.have.length(0);

    component.setProps({ open: true });
    expect(component.find(EmojiModifiers)).to.have.length(1);
    expect(component.find(EmojiCategory)).to.have.length(1);
    expect(component.find(EmojiCategories)).to.have.length(1);
    expect(component.find(EventListener)).to.have.length(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const component = shallow(<EmojiMenu {...props} />);

    component.setProps({ open: true });
    expect(spy).to.have.been.calledWith(props.style);
  });
});
