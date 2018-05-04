/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/loader/get-styles';
import styles from '../../src/loader/styles';

describe('Loader.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('dot', () => {
    it('should get styles', () => {
      const style = getStyles.dot();

      expect(style).to.deep.equal(styles.dot);
    });

    it('should combine styles', () => {
      const style = getStyles.dot(undefined, false, 0, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.dot('red');

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add inverted styles', () => {
      const style = getStyles.dot(undefined, true);

      expect(style).to.have.property('backgroundColor', '#FEFEFE');
    });

    it('should add index 1 styles', () => {
      const style = getStyles.dot(undefined, false, 1);

      expect(style).to.have.property('animationDelay', '.33s');
    });

    it('should add index 2 styles', () => {
      const style = getStyles.dot(undefined, false, 2);

      expect(style).to.have.property('animationDelay', '.66s');
    });
  });
});
