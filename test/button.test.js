/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Button from '../dist/components/button';

describe('<Button />', () => {
  const children = <p>children</p>;

  it('should contain children when passed in', () => {
    const wrapper = shallow(<Button onClick={() => {}}>{children}</Button>);

    expect(wrapper.contains(children)).to.equal(true);
  });

  it('should simulate click events', () => {
    const onButtonClick = spy();
    const wrapper = shallow(<Button onClick={onButtonClick}>{children}</Button>);

    wrapper.find('Button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('should add style prop', () => {
    const wrapper = shallow(<Button onClick={() => {}}>{children}</Button>);
    const style = {
      padding: '5px'
    };

    expect(wrapper.props().style).to.equal(undefined);
    wrapper.setProps({ style });
    expect(wrapper.props().style).to.equal(style);
  });
});
