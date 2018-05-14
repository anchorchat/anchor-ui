/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Loader from '../../src/loader/component';
import getStyles from '../../src/loader/get-styles';

chai.use(sinonChai);

describe('Loader', () => {
  const props = {
    style: {},
    dotStyle: {},
    inverted: false,
    color: '#1BA6C4'
  };

  it('should render root elements', () => {
    const component = shallow(<Loader {...props} />);

    expect(component.find('div')).to.have.length(1);
    expect(component.find('span')).to.have.length(3);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Loader {...props} />);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get dot styles', () => {
    const spy = sinon.spy(getStyles, 'dot');

    shallow(<Loader {...props} />);
    expect(spy).to.have.been.calledWithMatch(props.color, props.inverted, props.dotStyle);
    expect(spy).to.have.callCount(3);
  });
});
