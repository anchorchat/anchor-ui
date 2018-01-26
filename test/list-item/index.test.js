/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import ListItem from '../../src/list-item/component';
import AdminBadge from '../../src/admin-badge';
import Button from '../../src/button';
import IconMore from '../../src/icons/icon-more';
import IconMute from '../../src/icons/icon-mute';
import IconBlock from '../../src/icons/icon-block';
import Avatar from '../../src/avatar';
import Badge from '../../src/badge';
import getStyles from '../../src/list-item/get-styles';
import styles from '../../src/list-item/styles';

chai.use(sinonChai);

describe('ListItem', () => {
  const props = {
    primaryText: 'Primary',
    style: {},
    primaryTextStyle: {},
    secondaryTextStyle: {},
    color: '#1BA6C4'
  };

  it('should render root elements', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find('li')).to.have.length(1);
    expect(component.find('h1')).to.have.length(1);
  });

  it('should render secondaryText element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('h2')).to.have.length(0);

    component.setProps({ secondaryText: 'Text' });
    expect(component.find('h2')).to.have.length(1);
    expect(component.containsMatchingElement(<h2> Text</h2>)).to.equal(true);

    component.setProps({ secondaryText: <span>Node</span> });
    expect(component.find('h2')).to.have.length(1);
    expect(component.find('h2 > span')).to.have.length(1);
    expect(component.find('h2').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render textBadge element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('h2')).to.have.length(0);

    component.setProps({ textBadge: 'Text' });
    expect(component.find('h2')).to.have.length(1);
    expect(component.containsMatchingElement(<h2>Text </h2>)).to.equal(true);

    component.setProps({ secondaryText: <AdminBadge /> });
    expect(component.find('h2')).to.have.length(1);
    expect(component.find(AdminBadge)).to.have.length(1);
    expect(component.find('h2').containsMatchingElement(AdminBadge)).to.equal(true);
  });

  it('should render rightButton element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find(Button)).to.have.length(0);
    expect(component.find(IconMore)).to.have.length(0);

    component.setProps({ rightButton: <Button iconButton><IconMore /></Button> });
    expect(component.find('div')).to.have.length(2);
    expect(component.find(Button)).to.have.length(1);
    expect(component.find(IconMore)).to.have.length(1);
  });

  it('should render avatar element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find(Avatar)).to.have.length(0);

    component.setProps({ avatar: 'image' });
    expect(component.find('div')).to.have.length(2);
    expect(component.find(Avatar)).to.have.length(1);
  });

  it('should render badge element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find(Badge)).to.have.length(0);

    component.setProps({ avatar: 'image', badge: <Badge value={9} maxValue={9} /> });
    expect(component.find('div')).to.have.length(3);
    expect(component.find(Badge)).to.have.length(1);
  });

  it('should render muted element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find(IconMute)).to.have.length(0);

    component.setProps({ avatar: 'image', muted: true });
    expect(component.find('div')).to.have.length(3);
    expect(component.find(IconMute)).to.have.length(1);
  });

  it('should render blocked element', () => {
    const component = shallow(<ListItem {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find(IconBlock)).to.have.length(0);

    component.setProps({ avatar: 'image', blocked: true });
    expect(component.find('div')).to.have.length(3);
    expect(component.find(IconBlock)).to.have.length(1);
  });

  it('should call onClick', () => {
    const spy = sinon.spy();
    const component = shallow(<ListItem {...props} />);

    component.setProps({ onClick: spy });
    component.find('li').simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<ListItem {...props} />);
    expect(spy).to.have.been.calledWith(props.color, false, null, props.style);
  });

  it('should get textContainer styles', () => {
    const spy = sinon.spy(getStyles, 'textContainer');

    shallow(<ListItem {...props} />);
    expect(spy).to.have.been.calledWith('', null);
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');
    const component = shallow(<ListItem {...props} />);

    expect(spy).to.have.been.calledWith(styles.primaryText, false, null, props.primaryTextStyle);

    component.setProps({ secondaryText: 'Text' });
    expect(spy).to.have.callCount(3);
    expect(spy).to.have.been.calledWith(styles.secondaryText, false, null, props.secondaryTextStyle); // eslint-disable-line max-len
  });
});
