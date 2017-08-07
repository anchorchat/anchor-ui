/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/card-header/get-styles';
import styles from '../../src/card-header/styles';

describe('CardHeader.getStyles', () => {
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

      expect(style).to.deep.equal({});
    });

    it('should combine styles', () => {
      const style = getStyles.header(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add avatar styles', () => {
      const style = getStyles.header(true, {});

      expect(style).to.have.property('maxWidth', 'calc(100% - 56px)');
    });
  });

  describe('title', () => {
    it('should get styles', () => {
      const style = getStyles.title();

      expect(style).to.deep.equal(styles.title);
    });

    it('should combine styles', () => {
      const style = getStyles.title({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('subtitle', () => {
    it('should get styles', () => {
      const style = getStyles.subtitle();

      expect(style).to.deep.equal(styles.subtitle);
    });

    it('should combine styles', () => {
      const style = getStyles.subtitle({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('avatar', () => {
    it('should get styles', () => {
      const style = getStyles.avatar();

      expect(style).to.deep.equal(styles.avatar);
    });

    it('should combine styles', () => {
      const style = getStyles.avatar({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
