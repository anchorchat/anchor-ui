/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/dialog/get-styles';
import styles from '../../src/dialog/styles';

describe('Dialog.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.dialog);
    });

    it('should combine styles', () => {
      const style = getStyles.root('blue', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('HotPink');

      expect(style).to.have.property('backgroundColor', 'HotPink');
    });
  });

  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
