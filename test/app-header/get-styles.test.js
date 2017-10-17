/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/app-header/get-styles';
import styles from '../../src/app-header/styles';

describe('AppHeader.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add left button styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('paddingLeft', '56px');
    });

    it('should add right button styles', () => {
      const style = getStyles.root('red', false, true);

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

  describe('leftButton', () => {
    it('should get styles', () => {
      const style = getStyles.leftButton();

      expect(style).to.deep.equal(styles.leftButton);
    });

    it('should combine styles', () => {
      const style = getStyles.leftButton({ color: 'red' });

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
});
