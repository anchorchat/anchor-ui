/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/slider/get-styles';
import styles from '../../src/slider/styles';

describe('Slider.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();
      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });

    it('should add disabled styles', () => {
      const style = getStyles.root({}, true);
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

  describe('filled', () => {
    it('should get styles', () => {
      const style = getStyles.filled('#1BA6C4', 1);
      expect(style).to.deep.equal(styles.filled);
    });

    it('should combine styles', () => {
      const style = getStyles.filled('red', 1, { color: 'red' });
      expect(style).to.have.property('color', 'red');
    });

    it('should add theme colors', () => {
      const style = getStyles.filled('red');
      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add percentage styles', () => {
      const style = getStyles.filled('red', 0.5);
      expect(style).to.have.property('width', '50%');
    });
  });

  describe('remaining', () => {
    it('should get styles', () => {
      const style = getStyles.remaining(0);
      expect(style).to.deep.equal(styles.remaining);
    });

    it('should combine styles', () => {
      const style = getStyles.remaining(1, { color: 'red' });
      expect(style).to.have.property('color', 'red');
    });

    it('should add percentage styles', () => {
      const style = getStyles.remaining(0.5);
      expect(style).to.have.property('width', '50%');
    });
  });

  describe('button', () => {
    it('should get styles', () => {
      const style = getStyles.button('red', 0);

      expect(style).to.deep.equal(styles.button);
    });

    it('should combine styles', () => {
      const style = getStyles.button('red', 0, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add percentage styles', () => {
      const style = getStyles.button('red', 0.5);

      expect(style).to.have.property('left', '50%');
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
