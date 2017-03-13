/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../../src/button';

describe('<Button />', () => {
  const children = <p>children</p>;

  it('should contain children when passed in', () => {
    const wrapper = shallow(<Button onClick={() => {}}>{children}</Button>);

    expect(wrapper.contains(children)).to.equal(true);
  });
});
