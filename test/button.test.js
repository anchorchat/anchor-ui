/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
const React = require('react');
const enzyme = require('enzyme');
const chai = require('chai');
const Button = require('../dist/components/button');

describe('<Button />', () => {
  const children = <p>children</p>;

  it('renders children', () => {
    const wrapper = enzyme.shallow(<Button onClick={() => {}}>{children}</Button>);

    chai.assert.ok(wrapper.contains(children), 'should contain children');
  });
});
