/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
const React = require('react');
const enzyme = require('enzyme');
const chai = require('chai');
const sinon = require('sinon');
const Button = require('../dist/components/button');

describe('<Button />', () => {
  const children = <p>children</p>;

  it('should contain children when passed in', () => {
    const wrapper = enzyme.shallow(<Button onClick={() => {}}>{children}</Button>);

    chai.expect(wrapper.contains(children)).to.equal(true);
  });

  it('should simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = enzyme.shallow(<Button onClick={onButtonClick}>{children}</Button>);

    wrapper.find('Button').simulate('click');
    chai.expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('allows us to overide styles', () => {
    const wrapper = enzyme.shallow(<Button onClick={() => {}}>{children}</Button>);
    const style = {
      padding: '5px'
    };

    chai.expect(wrapper.props().style).to.equal(undefined);
    wrapper.setProps({ style });
    chai.expect(wrapper.props().style).to.equal(style);
  });
});
