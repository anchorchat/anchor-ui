/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Profile from '../../src/profile';
import Avatar from '../../src/avatar';
import getStyles from '../../src/profile/get-styles';

chai.use(sinonChai);
global.navigator = { userAgent: 'all' };

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
  const coverBackground = {
    backgroundImage: 'url()'
  };

  it('should always render four section elements', () => {
    const profile = shallow(<Profile {...props} />);

    expect(profile.find('section')).to.have.length(4);
  });

  it('should always render a h1 element', () => {
    const profile = shallow(<Profile {...props} />);

    expect(profile.find('h1')).to.have.length(1);
  });

  it('should pass the value of the header prop to the h1 element', () => {
    const profile = shallow(<Profile {...props} />);

    expect(profile.containsMatchingElement(<h1>header</h1>)).to.equal(true);
  });

  it('should always render the value of the button prop', () => {
    props.button = <button>text</button>;
    const profile = shallow(<Profile {...props} />);

    expect(profile.find('button')).to.have.length(1);
    expect(profile.containsMatchingElement(<button>text</button>)).to.equal(true);
    props.button = null;
  });

  it('should always render the value of the children prop', () => {
    const profile = shallow(<Profile {...props} >{children}</Profile>);

    expect(profile.contains(children)).to.equal(true);
  });

  it('should render a p element if the secondaryText prop is passed', () => {
    let profile = shallow(<Profile {...props} />);

    expect(profile.find('p')).to.have.length(0);

    props.secondaryText = 'text';
    profile = shallow(<Profile {...props} />);

    expect(profile.find('p')).to.have.length(1);
    expect(profile.containsMatchingElement(<p>text</p>)).to.equal(true);
    props.secondaryText = '';
  });

  it('should not render an Avatar component if the avatar prop is not passed', () => {
    const profile = shallow(<Profile {...props} />);

    expect(profile.find(Avatar)).to.have.length(0);
  });

  it('should render an Avatar component if the avatar prop is passed', () => {
    props.avatar = 'imageurl';
    const profile = shallow(<Profile {...props} />);

    expect(profile.find(Avatar)).to.have.length(1);
    props.avatar = '';
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get coverImage styles', () => {
    const spy = sinon.spy(getStyles, 'coverImage');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(coverBackground);
  });

  it('should get header styles', () => {
    const spy = sinon.spy(getStyles, 'header');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(props.headerStyle);
  });

  it('should get secondaryText styles', () => {
    props.secondaryText = 'text';
    const spy = sinon.spy(getStyles, 'secondaryText');

    shallow(<Profile {...props} />);
    expect(spy).to.have.been.calledWith(props.secondaryTextStyle);
    props.secondaryText = '';
  });
});
