/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/search-box/get-styles';
import styles from '../../src/search-box/styles';

describe('SearchBox.getStyles', () => {
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

  describe('icon', () => {
    it('should get styles', () => {
      const style = getStyles.icon();
      expect(style).to.deep.equal(styles.icon);
    });

    it('should combine styles', () => {
      const style = getStyles.icon({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input();
      expect(style).to.deep.equal(styles.input);
    });

    it('should combine styles', () => {
      const style = getStyles.input({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });
});
