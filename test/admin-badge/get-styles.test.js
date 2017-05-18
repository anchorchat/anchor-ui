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
      const style = getStyles.root({}, {}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add inverted styles', () => {
      const style = getStyles.root({}, true);

      expect(style).to.have.property('backgroundColor', '#FEFEFE');
    });
  });
});
