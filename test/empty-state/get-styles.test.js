/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/empty-state/get-styles';
import styles from '../../src/empty-state/styles';

describe('EmptyState.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root('');

      expect(style).to.deep.equal(styles.emptyState);
    });

    it('should combine styles', () => {
      const style = getStyles.root('', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
