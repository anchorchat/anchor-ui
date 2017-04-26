/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/input/get-styles';
import styles from '../../src/input/styles';

describe('Input.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should change letter color', () => {
      const style = getStyles.root(false, { color: 'green' });

      expect(style).to.have.property('color', 'green');
    });

    it('should add disabled styles', () => {
      const style = getStyles.root(true, {});

      expect(style).to.have.property('opacity', '0.38');
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
    it('should disable styles', () => {
      const style = getStyles.error();

      expect(style).to.deep.equal(styles.error);
    });

    it('should change styles', () => {
      const style = getStyles.error({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input(true, {});

      expect(style).to.have.property('width', '100%');
    });
  });
});
