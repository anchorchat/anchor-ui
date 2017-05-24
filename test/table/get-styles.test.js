/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/table/get-styles';
import styles from '../../src/table/styles';

describe('Table.getStyles', () => {
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
});
