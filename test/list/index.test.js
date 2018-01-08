/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import List from '../../src/list/component';
import getStyles from '../../src/list/get-styles';

chai.use(sinonChai);

describe('List', () => {
  const props = {
    style: {},
    headerStyle: {}
  };
  const children = <p>children</p>;

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render root elements', () => {
    const component = shallow(<List {...props}>{children}</List>);

    component.setProps({ open: true });
    expect(component.find('ul')).to.have.length(1);
    expect(component.find('p')).to.have.length(1);
  });

  it('should render header element', () => {
    const component = shallow(<List {...props}>{children}</List>);

    component.setProps({ open: true, header: 'Text' });
    expect(component.find('h1')).to.have.length(1);
    expect(component.containsMatchingElement(<h1>Text</h1>)).to.equal(true);

    component.setProps({ header: <span>Node</span> });
    expect(component.find('h1')).to.have.length(1);
    expect(component.find('h1 > span')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const combinedProps = {
      ...props,
      open: true
    };

    shallow(<List {...combinedProps}>{children}</List>);
    expect(spy).to.have.been.calledWith(props.style);
  });

  it('should get listHeader styles', () => {
    const spy = sinon.spy(getStyles, 'listHeader');
    const combinedProps = {
      ...props,
      open: true,
      header: 'Text'
    };

    shallow(<List {...combinedProps}>{children}</List>);
    expect(spy).to.have.been.calledWith(props.headerStyle);
  });
});
