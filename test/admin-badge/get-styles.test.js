/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/admin-badge/get-styles';
import styles from '../../src/admin-badge/styles';

describe('AdminBadge.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
      expect(style).to.have.property('border', '1px solid red');
    });

    it('should add inverted styles', () => {
      const style = getStyles.root(undefined, true);

      expect(style).to.include({ ...style.inverted });
    });
  });
});
