/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/menu/get-styles';
import styles from '../../src/menu/styles';

describe('Menu.getStyles', () => {
  describe('container', () => {
    it('should get styles', () => {
      const style = getStyles.container();

      expect(style).to.deep.equal(styles.container);
    });
  });

  describe('overlay', () => {
    it('should get styles', () => {
      const style = getStyles.overlay();

      expect(style).to.deep.equal(styles.overlay);
    });

    it('should add open styles', () => {
      const style = getStyles.overlay(true);

      expect(style).to.have.property('opacity', 1);
      expect(style).to.have.property('pointerEvents', 'auto');
    });
  });

  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should add open styles', () => {
      const style = getStyles.root(true);

      expect(style).to.have.property('transform', 'none');
    });

    it('should combine styles', () => {
      const style = getStyles.root(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
