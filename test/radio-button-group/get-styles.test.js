/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/radio-button-group/get-styles';
import styles from '../../src/radio-button-group/styles';

describe('RadioButtonGroup.getStyles', () => {
  describe('buttons', () => {
    it('should get styles', () => {
      const style = getStyles.buttons();

      expect(style).to.deep.equal(styles.buttons);
    });

    it('should combine styles', () => {
      const style = getStyles.buttons({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

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

  describe('error', () => {
    it('should get styles', () => {
      const style = getStyles.error();

      expect(style).to.deep.equal(styles.error);
    });

    it('should combine styles', () => {
      const style = getStyles.error({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
