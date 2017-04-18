/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/tab/get-styles';
import styles from '../../src/tab/styles';

describe('Tab.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should change theme color', () => {
      const style = getStyles.root('red', true, { color: 'red' });

      expect(style).to.have.property('borderBottom');
      expect(style.borderBottom).to.equal('3px solid red');
    });

    it('should add selected styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('borderBottom', '3px solid red');
      expect(style).to.have.property('opacity', 1);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('label', () => {
    it('should get styles', () => {
      const style = getStyles.label();

      expect(style).to.deep.equal(styles.label);
    });

    it('should combine styles', () => {
      const style = getStyles.label(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('icon', () => {
    it('should get styles', () => {
      const style = getStyles.icon();

      expect(style).to.deep.equal(styles.icon);
    });

    it('should combine styles', () => {
      const style = getStyles.icon(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('badge', () => {
    it('should get styles', () => {
      const style = getStyles.badge();

      expect(style).to.deep.equal(styles.badge);
    });

    it('should combine styles', () => {
      const style = getStyles.badge({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
