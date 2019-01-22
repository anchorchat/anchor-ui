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

    it('should combine styles', () => {
      const style = getStyles.root(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add disabled styles', () => {
      const style = getStyles.root(true);

      expect(style).to.have.property('opacity', '0.5');
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

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input();

      expect(style).to.deep.equal(styles.input);
    });

    it('should get error styles', () => {
      const style = getStyles.input(true);

      expect(style).to.have.property('border', '1px solid #FD2A43');
      expect(style).to.have.property('color', '#FD2A43');
    });

    it('should combine styles', () => {
      const style = getStyles.input(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('textarea', () => {
    it('should get styles', () => {
      const style = getStyles.textarea();

      expect(style).to.deep.equal({ ...styles.textarea, ...styles.input });
    });

    it('should combine styles', () => {
      const style = getStyles.textarea(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add errorMessage styles', () => {
      const style = getStyles.textarea(true);

      expect(style).to.have.property('border', '1px solid #FD2A43');
      expect(style).to.have.property('color', '#FD2A43');
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

  describe('inputRoot', () => {
    it('should get styles', () => {
      const style = getStyles.inputRoot();

      expect(style).to.deep.equal({ ...styles.inputRoot, ...{ height: 32 } });
    });

    it('should add height', () => {
      const height = Math.floor(Math.random() * 10);
      const style = getStyles.inputRoot(height);

      expect(style).to.have.property('height', height);
    });
  });

  describe('placeholder', () => {
    it('should get styles', () => {
      const style = getStyles.placeholder();

      expect(style).to.deep.equal(styles.placeholder);
    });

    it('should combine styles', () => {
      const style = getStyles.placeholder({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
