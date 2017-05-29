/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Paper from '../../src/paper';
import Alert from '../../src/alert';

const props = {
  style: {},
  iconStyle: {},
  textStyle: {},
  buttonStyle: {},
  hideAlert: null
};

describe('rendered elements', () => {
  const children = <p>children</p>;

  it('should always render a section element', () => {
    const alert = shallow(<Alert {...props} />);
    const section = alert.find('section').first();
    expect(section.length).to.equal(1);
  });

  it('should always render a article element', () => {
    const alert = shallow(<Alert {...props} />);
    const article = alert.find('article').first();
    expect(article.length).to.equal(1);
  });

  it('should render everything else', () => {
    const alert = shallow(<Alert {...props} />);
    const section = alert.find('section').first();
    const article = alert.find('article').first();
    expect(section.find('section')).to.have.length(0);
    expect(section.find('h1')).to.have.length(0);
    expect(section.contains(children)).to.equal(false);
    expect(article.find('article')).to.have.length(0);
    expect(article.find('h1')).to.have.length(0);
    expect(article.contains(children)).to.equal(false);
  });
});

describe('when paper prop is passed', () => {
  it('should render Paper component', () => {
    const alert = shallow(<Alert {...props} />);
    expect(alert.find(Paper)).to.have.length(0);
  });

  describe('when Paper prop is not passed', () => {
    before(() => {
      props.Paper = '';
    });

    it('should not render Paper component', () => {
      const alert = shallow(<Alert {...props} />);
      expect(alert.find(Paper)).to.have.length(0);
    });
  });
});
