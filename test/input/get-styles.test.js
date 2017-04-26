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
    it('should get styles', () => {
      const style = getStyles.error();

      expect(style).to.deep.equal(styles.error);
    });

    it('should combine styles', () => {
      const style = getStyles.error({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input();

      expect(style).to.deep.equal(styles.input);
    });

    it('should get error styles', () => {
      const style = getStyles.input(true);

      expect(style).to.have.property('border': '1px solid #FD2A43');
      expect(style).to.have.property('color': '#FD2A43');
    });

    it('should combine styles', () => {
      const style = getStyles.input(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
