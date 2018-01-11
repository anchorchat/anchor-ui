/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/checkbox/get-styles';
import styles from '../../src/checkbox/styles';

describe('Checkbox.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root(null, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('HotPink');

      expect(style[':hover']).to.have.property('color', 'HotPink');
    });
  });

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input();

      expect(style).to.deep.equal(styles.input);
    });

    it('should combine styles', () => {
      const style = getStyles.input({ color: 'red' });

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

  describe('icon', () => {
    it('should get styles', () => {
      const style = getStyles.icon();

      expect(style).to.deep.equal(styles.icon);
    });

    it('should combine styles', () => {
      const style = getStyles.icon({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('unchecked', () => {
    it('should get styles', () => {
      const style = getStyles.unchecked();

      expect(style).to.deep.equal(styles.unchecked);
    });

    it('should combine styles', () => {
      const style = getStyles.unchecked({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
