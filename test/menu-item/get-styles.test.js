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
      const style = getStyles.root('blue', false, false, null, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add iconElement styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('paddingLeft', '40px');
    });

    it('should add active styles', () => {
      const style = getStyles.root('red', false, true);

      expect(style).to.have.property('color', 'red');
      expect(style).to.have.property('fontWeight', 'bolder');
    });

    it('should add rightButton styles', () => {
      const style = getStyles.root('red', false, false, true, {});

      expect(style).to.have.property('paddingRight', '56px');
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

  describe('rightButton', () => {
    it('should get styles', () => {
      const style = getStyles.rightButton();

      expect(style).to.deep.equal(styles.rightButton);
    });

    it('should combine styles', () => {
      const style = getStyles.rightButton({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
