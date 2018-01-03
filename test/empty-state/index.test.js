/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EmptyState from '../../src/empty-state/component';
import Button from '../../src/button';
import getStyles from '../../src/empty-state/get-styles';

chai.use(sinonChai);

describe('EmptyState', () => {
  const props = {
    headerText: '',
    bodyText: '',
    style: {},
    headingStyle: {},
    bodyStyle: {}
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should render root elements', () => {
    const component = shallow(<EmptyState {...props} />);

    expect(component.find('section')).to.have.length(1);
    expect(component.find('h1')).to.have.length(1);
    expect(component.find('p')).to.have.length(1);
  });

  it('should render headerText', () => {
    const combinedProps = {
      ...props,
      headerText: 'Text'
    };
    const component = shallow(<EmptyState {...combinedProps} />);

    expect(component.containsMatchingElement(<h1>Text</h1>)).to.equal(true);

    component.setProps({ headerText: <span>Node</span> });
    expect(component.find('h1 > span')).to.have.length(1);
    expect(component.find('h1').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render bodyText', () => {
    const combinedProps = {
      ...props,
      bodyText: 'Text'
    };
    const component = shallow(<EmptyState {...combinedProps} />);

    expect(component.containsMatchingElement(<p>Text</p>)).to.equal(true);

    component.setProps({ bodyText: <span>Node</span> });
    expect(component.find('p > span')).to.have.length(1);
    expect(component.find('p').containsMatchingElement(<span>Node</span>)).to.equal(true);
  });

  it('should render button element', () => {
    const component = shallow(<EmptyState {...props} />);

    expect(component.find(Button)).to.have.length(0);

    component.setProps({ button: <Button>Button</Button> });
    expect(component.find(Button)).to.have.length(1);
    expect(component.find(Button).containsMatchingElement('Button')).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');
    const component = shallow(<EmptyState {...props} />);

    expect(spy).to.have.been.calledWith('', props.style);

    component.setProps({ background: 'http://lorempixel.com/400/200' });
    expect(spy).to.have.been.calledWith('http://lorempixel.com/400/200', props.style);
  });
});
