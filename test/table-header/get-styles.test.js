/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/table-header/get-styles';
import styles from '../../src/table-header/styles';

describe('TableHeader.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add theme colors', () => {
      const style = getStyles.root('red', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
