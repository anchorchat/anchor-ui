/* eslint-env mocha */
import { expect } from 'chai';
import combineStyles from '../../src/internal/combine-styles';

describe('combineStyles', () => {
  it('should return style if overrideStyle is an empty object', () => {
    const style = {
      color: 'red'
    };

    expect(combineStyles(style, {})).to.deep.equal(style);
  });

  it('should combine styles', () => {
    const style = {
      color: 'red'
    };

    const overrideStyle = {
      margin: '10px'
    };

    const combinedStyle = {
      color: 'red',
      margin: '10px'
    };

    expect(combineStyles(style, overrideStyle)).to.deep.equal(combinedStyle);
  });

  it('should override keys from style', () => {
    const style = {
      color: 'red',
      margin: '10px'
    };

    const overrideStyle = {
      color: 'blue'
    };

    const combinedStyle = {
      color: 'blue',
      margin: '10px'
    };

    expect(combineStyles(style, overrideStyle)).to.deep.equal(combinedStyle);
  });
});
