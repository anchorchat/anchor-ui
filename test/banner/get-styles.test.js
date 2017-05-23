/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/banner/get-styles';
import styles from '../../src/banner/styles';

describe('Banner.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('desktop', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add desktop type styles', () => {
      const style = getStyles.root('desktop');

      expect(style).to.have.property('width', '728px');
    });

    it('should add mobile type styles', () => {
      const style = getStyles.root('mobile');

      expect(style).to.have.property('width', '320px');
    });
  });
});
