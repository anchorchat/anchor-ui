/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Lightbox from '../../src/lightbox';
import getStyles from '../../src/lightbox/get-styles';
import colors from '../../src/settings/colors';
import Overlay from '../../src/overlay';

chai.use(sinonChai);

describe('Lightbox', () => {
  const props = {
    style: {},
    overlayStyle: {},
    iconColor: colors.white,
    open: false
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<Lightbox {...props} />);

    expect(wrapper.find('section')).to.have.length(2);
  });

  it('should always render a Overlay element', () => {
    const wrapper = shallow(<Lightbox {...props} />).dive();

    expect(wrapper.find(Overlay)).to.have.length(1);
  });
});
