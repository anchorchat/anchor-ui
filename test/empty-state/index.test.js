/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import EmptyState from '../../src/empty-state';
import getStyles from '../../src/empty-state/get-styles';
import button from '../../src/button';

chai.use(sinonChai);

describe('EmptyState', () => {
  const props = {
    headerText: '',
    bodyText: '',
    button: <button>text</button>,
    background: '',
    style: { root: true },
    headingStyle: { heading: true },
    bodyStyle: { body: true },
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should always render a section element', () => {
    const wrapper = shallow(<EmptyState {...props} />).dive();

    expect(wrapper.find('section')).to.have.length(1);
  });

  it('should always render a h1 element', () => {
    const wrapper = shallow(<EmptyState {...props} />).dive();

    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should always render a p element', () => {
    const wrapper = shallow(<EmptyState {...props} />).dive();

    expect(wrapper.find('p')).to.have.length(1);
  });

  it('should always render the value of the button prop', () => {
    const wrapper = shallow(<EmptyState {...props} />).dive();

    expect(wrapper.find('button')).to.have.length(1);
    expect(wrapper.containsMatchingElement(<button>text</button>)).to.equal(true);
  });

  it('should get root styles', () => {
    const spy = sinon.spy(getStyles, 'root');

    shallow(<EmptyState {...props} />).dive();
    expect(spy).to.have.been.calledWith(props.background, props.style);
  });
});
