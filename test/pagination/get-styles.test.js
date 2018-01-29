/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/pagination/get-styles';
import styles from '../../src/pagination/styles';

describe('Pagination.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();
      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({ color: 'red' });
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

  describe('nav', () => {
    it('should get default styles', () => {
      const style = getStyles.nav();

      expect(style).to.have.property('marginBottom', '10px');
      expect(style).to.have.property('marginTop', 0);
    });

    it('should get styles', () => {
      const style = getStyles.nav('');
      expect(style).to.deep.equal(styles.nav);
    });

    it('should combine styles', () => {
      const style = getStyles.nav('top', { color: 'red' });
      expect(style).to.have.property('color', 'red');
    });

    it('should add position top styles', () => {
      const style = getStyles.nav('top');
      expect(style).to.have.property('marginBottom', '10px');
    });

    it('should add position bottom styles', () => {
      const style = getStyles.nav('bottom');
      expect(style).to.have.property('marginTop', '10px');
    });
  });

  describe('navButton', () => {
    it('should get styles', () => {
      const style = getStyles.navButton();
      expect(style).to.deep.equal(styles.navButton);
    });

    it('should combine styles', () => {
      const style = getStyles.navButton({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });

  describe('iconButton', () => {
    it('should get styles', () => {
      const style = getStyles.iconButton({ padding: '6px' });
      expect(style).to.deep.equal(styles.navButton);
    });

    it('should combine styles', () => {
      const style = getStyles.iconButton({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });
});
