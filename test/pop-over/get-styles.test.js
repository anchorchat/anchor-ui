/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/pop-over/get-styles';
import styles from '../../src/pop-over/styles';

describe('PopOver.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add position styles', () => {
      const style = getStyles.root({ top: '50%' });

      expect(style).to.have.property('top', '50%');
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
