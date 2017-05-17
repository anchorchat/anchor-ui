/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/menu-item/get-styles';
import styles from '../../src/menu-item/styles';

describe('MenuItem.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', {}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add iconElement styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('paddingLeft', '40px');
    });

    it('should add active styles', () => {
      const style = getStyles.root('red', {}, true);

      expect(style).to.have.property('paddingRight', '40px');
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

  describe('activeIcon', () => {
    it('should get styles', () => {
      const style = getStyles.activeIcon();

      expect(style).to.deep.equal(styles.activeIcon);
    });

    it('should combine styles', () => {
      const style = getStyles.activeIcon({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
