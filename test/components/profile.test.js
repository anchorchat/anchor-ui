/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Profile from '../../src/profile';
import Avatar from '../../src/avatar';
import Button from '../../src/button';

describe('<Profile />', () => {
  const props = {
    avatar: 'imageurl',
    coverImage: '',
    children: null,
    button: null,
    secondaryText: '',
    style: {},
    headerStyle: {},
    secondaryTextStyle: {},
    avatarStyle: {},
    status: ''
  };
  const children = <p>children</p>;
  const button = <Button />;

  describe('rendered elements', () => {
    it('should always render a section element', () => {
      const profile = shallow(<Profile {...props} />);
      const section = profile.find('section').first();
      expect(section.length).to.equal(1);
    });

    it('should render everything else', () => {
      const profile = shallow(<Profile {...props} >{button}{children}</Profile>);
      const section = profile.find('section').first();
      expect(section.find('section')).to.have.length(4);
      expect(section.find('h1')).to.have.length(1);
      expect(section.contains(button)).to.equal(true);
      expect(section.contains(children)).to.equal(true);
    });
  });

  describe('when avatar prop is passed', () => {
    it('should render Avatar component', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.find(Avatar)).to.have.length(1);
    });
  });

  describe('when avatar prop is not passed', () => {
    before(() => {
      props.avatar = '';
    });

    it('should not render Avatar component', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.find(Avatar)).to.have.length(0);
    });
  });
});
