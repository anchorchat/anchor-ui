/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Gallery from '../../src/gallery';
import getStyles from '../../src/gallery/get-styles';

chai.use(sinonChai);

describe('Gallery', () => {
  const props = {
    items: [
      {
        src: 'https://source.unsplash.com/featured/?man',
        alt: 'https://source.unsplash.com/featured/?man'
      },
      {
        src: 'https://source.unsplash.com/featured/?woman',
        alt: 'https://source.unsplash.com/featured/?woman'
      }
    ],
    style: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a section element', () => {
    const wrapper = shallow(<Gallery />);

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should render a div element', () => {
    const wrapper = shallow(<Gallery />);

    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render 3 div elements', () => {
    const wrapper = shallow(<Gallery {...props} />);

    expect(wrapper.find('div')).to.have.length(3);
  });

  it('should render 2 img elements', () => {
    const wrapper = shallow(<Gallery {...props} />);

    expect(wrapper.find('img')).to.have.length(2);
    const links = wrapper.find('img').map(node => node.prop('src'));
    expect(links).to.deep.equal(['https://source.unsplash.com/featured/?man', 'https://source.unsplash.com/featured/?woman']);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Gallery {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });
});
