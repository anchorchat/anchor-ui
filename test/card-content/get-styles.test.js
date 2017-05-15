/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/card-content/get-styles';
import styles from '../../src/card-content/styles';

describe('CardContent.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({ backgroundColor: 'red' });

      expect(style).to.have.property('backgroundColor', 'red');
    });
  });
});
