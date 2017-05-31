/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Profile from '../../src/profile';
import Avatar from '../../src/avatar';
import Button from '../../src/button';
import getStyles from '../../src/profile/get-styles';

chai.use(sinonChai);

describe('Profile.index', () => {
  const props = {
    avatar: '',
    coverImage: '',
    children: null,
    button: null,
    secondaryText: '',
    style: {},
    headerStyle: {},
    secondaryTextStyle: {},
    avatarStyle: {},
    status: '',
    header: 'header'
  };
  const children = <p>children</p>;
  const button = <Button />;

  it('should always render four section elements', () => {
    const profile = shallow(<Profile {...props} />);
    expect(profile.find('section')).to.have.length(4);
  });

  it('should always render a h1 element', () => {
    const profile = shallow(<Profile {...props} />);
    expect(profile.find('h1')).to.have.length(1);
  });

  it('should always render the value of the button prop', () => {
    const profile = shallow(<Profile {...props} >{button}</Profile>);
    expect(profile.contains(button)).to.equal(true);
  });

  it('should always render the value of the children prop', () => {
    const profile = shallow(<Profile {...props} >{children}</Profile>);
    expect(profile.contains(children)).to.equal(true);
  });

  it('should not render a p element if the secondaryText prop is not passed', () => {
    const profile = shallow(<Profile {...props} />);
    expect(profile.find('p')).to.have.length(0);
  });

  it('should not render an Avatar component if the avatar prop is not passed', () => {
    const profile = shallow(<Profile {...props} />);
    expect(profile.find(Avatar)).to.have.length(0);
  });

  it('should pass the value of the header prop to the h1 element', () => {
    const profile = shallow(<Profile {...props} />);
    expect(profile.containsMatchingElement(<h1>header</h1>)).to.equal(true);
  });

  describe('the p element', () => {
    before(() => {
      props.secondaryText = 'text';
    });

    it('should render if the secondaryText prop is passed', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.find('p')).to.have.length(1);
    });

    it('should get passed the value of the secondaryText prop', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.containsMatchingElement(<p>text</p>)).to.equal(true);
    });
  });

  describe('the Avatar component', () => {
    before(() => {
      props.avatar = 'imageurl';
      props.avatarStyle = { color: 'red' };
      props.status = 'away';
    });

    it('should render if the avatar prop is passed', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.find(Avatar)).to.have.length(1);
    });

    it('should get passed the value of the avatar prop to the image property', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.find({ image: 'imageurl' })).to.have.length(1);
    });

    it('should get passed the value of the status prop to the status property', () => {
      const profile = shallow(<Profile {...props} />);
      expect(profile.find({ status: 'away' })).to.have.length(1);
    });

    it('should do function stuff', () => {
      const spy = sinon.spy(getStyles, 'root');
      shallow(<Profile style={spy} />);
      expect(spy).to.have.callCount(1);
    });
  });
});
