/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/paper/get-styles';
import styles from '../../src/paper/styles';

describe('Paper.getStyles', () => {
  describe('root', () => {
    it('should get root styles', () => {
      const style = getStyles.root();

      expect(style).to.be.an('object');
      expect(style).to.have.all.keys('padding', 'borderRadius', 'boxShadow', 'backgroundColor', 'margin');
    });

    it('should change depth', () => {
      const style = getStyles.root(2);

      expect(style).to.be.an('object');
      expect(style.boxShadow).to.equal(styles.depthShadows[1]);
    });

    it('should combine styles', () => {
      const style = getStyles.root(1, { color: 'red' });

      // I'm now also testing combineStyles,
      // this can be avoided by exporting all internal functions as one object...
      expect(style).to.be.an('object');
      expect(style).to.have.all.keys('padding', 'borderRadius', 'boxShadow', 'backgroundColor', 'margin', 'color');
    });
  });
});
