/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import noop from 'lodash/noop';
import Alert from '../../src/alert/component';
import Button from '../../src/button';
import IconClose from '../../src/icons/icon-close';
import IconSuccess from '../../src/icons/icon-success';
import IconError from '../../src/icons/icon-error';
import IconWarning from '../../src/icons/icon-warning';
import IconInfo from '../../src/icons/icon-info';
import getStyles from '../../src/alert/get-styles';

chai.use(sinonChai);

describe('Alert', () => {
  const props = {
    text: 'text',
    type: 'success',
    style: {},
    iconStyle: {},
    textStyle: {},
    buttonStyle: {},
    hideAlert: null
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render a section element', () => {
    const component = shallow(<Alert {...props} />);

    expect(component.find('section')).to.have.length(1);
  });

  it('should render a div element', () => {
    const component = shallow(<Alert {...props} />);

    expect(component.find('div')).to.have.length(1);
  });

  it('should render a p element', () => {
    const component = shallow(<Alert {...props} />);

    expect(component.find('p')).to.have.length(1);
  });

  it('should render a Button instance', () => {
    const component = shallow(<Alert {...props} />);

    expect(component.find(Button)).to.have.length(0);
    expect(component.find(IconClose)).to.have.length(0);
    component.setProps({ hideAlert: noop });
    expect(component.find(Button)).to.have.length(1);
    expect(component.find(IconClose)).to.have.length(1);
  });

  it('should render text in p element', () => {
    const component = shallow(<Alert {...props} />);

    expect(component.containsMatchingElement(<p>text</p>)).to.equal(true);
  });

  it('should render node in p element', () => {
    const combinedProps = {
      ...props,
      text: <span>Node</span>
    };

    const component = shallow(<Alert {...combinedProps} />);

    expect(component.find('p').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render correct typed icon', () => {
    const component = shallow(<Alert {...props} />);

    expect(component.find(IconSuccess)).to.have.length(1);

    component.setProps({ type: 'error' });
    expect(component.find(IconError)).to.have.length(1);

    component.setProps({ type: 'warning' });
    expect(component.find(IconWarning)).to.have.length(1);

    component.setProps({ type: 'info' });
    expect(component.find(IconInfo)).to.have.length(1);
  });

  it('should call Button onClick function', () => {
    const spy = sinon.spy();
    const combinedProps = {
      ...props,
      hideAlert: spy
    };

    const component = shallow(<Alert {...combinedProps} />);

    component.find(Button).simulate('click');
    expect(spy).to.have.callCount(1);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<Alert {...props} />);
    expect(spy).to.have.been.calledWith(
      props.type,
      props.style
    );
  });

  it('should get icon styles', () => {
    const spy = sinon.spy(getStyles, 'icon');

    shallow(<Alert {...props} />);
    expect(spy).to.have.been.calledWith(props.iconStyle);
  });

  it('should get text styles', () => {
    const spy = sinon.spy(getStyles, 'text');

    shallow(<Alert {...props} />);
    expect(spy).to.have.been.calledWith(props.hideAlert, props.textStyle);
  });
});
