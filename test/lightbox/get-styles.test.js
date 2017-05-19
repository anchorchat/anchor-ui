/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/lightbox/get-styles';
import styles from '../../src/lightbox/styles';

describe('Lightbox.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.lightbox);
    });

    it('should combine styles', () => {
      const style = getStyles.root({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
