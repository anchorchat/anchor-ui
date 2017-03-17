/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/modal/get-styles';
import styles from '../../src/modal/styles';

describe('Modal.getStyles', () => {
  describe('overlay', () => {
    it('should get styles', () => {
      const style = getStyles.overlay();

      expect(style).to.deep.equal(styles.overlay);
    });
  });

  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({ color: 'red' });

      expect(style).to.have.property('color');
      expect(style.color).to.equal('red');
    });
  });

  describe('footer', () => {
    it('should get styles', () => {
      const style = getStyles.footer();

      expect(style).to.deep.equal(styles.footer);
    });

    it('should override color', () => {
      const style = getStyles.footer('red');

      expect(style.background).to.equal('red');
    });

    it('should combine styles', () => {
      const style = getStyles.footer('red', { color: 'red' });

      expect(style).to.have.property('color');
      expect(style.color).to.equal('red');
    });
  });
});
