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
      expect(style).to.have.property('left', 0);
    });
  });

  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root(false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add open styles', () => {
      const style = getStyles.root(true);

      expect(style).to.have.property('transform', 'none');
    });

    it('should add right styles', () => {
      const style = getStyles.root(false, 'right');

      expect(style).to.have.property('transform', 'translateX(256px)');
      expect(style).to.have.property('left', 'initial');
      expect(style).to.have.property('right', 0);
    });
  });

  describe('contentContainer', () => {
    it('should get styles', () => {
      const style = getStyles.contentContainer();

      expect(style).to.deep.equal(styles.contentContainer);
    });

    it('should combine styles', () => {
      const style = getStyles.contentContainer(false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add header styles', () => {
      const style = getStyles.contentContainer(true);

      expect(style).to.have.property('maxHeight', 'calc(100% - 48px)');
    });

    it('should add footer styles', () => {
      const style = getStyles.contentContainer(false, true);

      expect(style).to.have.property('maxHeight', 'calc(100% - 35px)');
    });

    it('should add header & footer styles', () => {
      const style = getStyles.contentContainer(true, true);

      expect(style).to.have.property('maxHeight', 'calc(100% - 83px)');
    });
  });

  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header(null, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add theme color', () => {
      const style = getStyles.header('red');

      expect(style).to.have.property('color', 'red');
    });

    it('should add icon styles', () => {
      const style = getStyles.header(null, true);

      expect(style).to.have.property('padding', '16px 16px 16px 40px');
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

  describe('sidebar', () => {
    it('should get styles', () => {
      const style = getStyles.sidebar();

      expect(style).to.deep.equal(styles.sidebar);
    });

    it('should combine styles', () => {
      const style = getStyles.sidebar({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('footer', () => {
    it('should get styles', () => {
      const style = getStyles.footer();

      expect(style).to.deep.equal(styles.footer);
    });

    it('should combine styles', () => {
      const style = getStyles.footer(null, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add sidebar styles', () => {
      const style = getStyles.footer(true);

      expect(style).to.have.property('position', 'initial');
    });
  });
});
