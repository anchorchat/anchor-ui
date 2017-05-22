/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/select/get-styles';
import styles from '../../src/select/styles';

describe('Select.getStyles', () => {
  describe('icon', () => {
    it('should get styles', () => {
      const style = getStyles.icon();
      expect(style).to.deep.equal(styles.icon);
    });

    it('should combine styles', () => {
      const style = getStyles.icon(false, { color: 'red' });
      expect(style).to.have.property('color', 'red');
    });

    it('should add open styles', () => {
      const style = getStyles.icon(true);
      expect(style).to.have.property('transform', 'rotate(180deg)');
    });
  });

  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();
      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header(false, 'red', { color: 'red' });
      expect(style).to.have.property('color', 'red');
    });

    it('should add theme colors', () => {
      const style = getStyles.header(false, 'red');
      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add errorMessage styles', () => {
      const style = getStyles.header(true);
      expect(style).to.have.property('border', '1px solid #FD2A43');
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
