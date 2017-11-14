/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/badge/get-styles';
import styles from '../../src/badge/styles';

describe('Badge.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.badge);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add inverted styles', () => {
      const style = getStyles.root(undefined, true);

      expect(style).to.include({ ...style.inverted });
    });
  });
});
