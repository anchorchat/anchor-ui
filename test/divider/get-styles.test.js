/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/divider/get-styles';
import styles from '../../src/divider/styles';

describe('Divider.getStyles', () => {
  describe('hr', () => {
    it('should get styles', () => {
      const style = getStyles.hr();

      expect(style).to.deep.equal(styles.hr);
    });

    it('should combine styles', () => {
      const style = getStyles.hr({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('text', () => {
    it('should get styles', () => {
      const style = getStyles.text();

      expect(style).to.deep.equal(styles.text);
    });

    it('should combine styles', () => {
      const style = getStyles.text({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
