/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/radio-button-group/get-styles';
import styles from '../../src/radio-button-group/styles';

describe('RadioButtonGroup.getStyles', () => {
  describe('label', () => {
    it('should get styles', () => {
      const style = getStyles.label();

      expect(style).to.deep.equal(styles.label);
    });

    it('should combine styles', () => {
      const style = getStyles.label({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
