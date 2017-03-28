/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/profile/get-styles';
import styles from '../../src/profile/styles';

describe('Profile.getStyles', () => {
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

  describe('coverImage', () => {
    it('should get styles', () => {
      const style = getStyles.coverImage();

      expect(style).to.deep.equal(styles.coverImage);
    });

    it('should combine styles', () => {
      const style = getStyles.coverImage({ color: 'red' });

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

  describe('secondaryText', () => {
    it('should get styles', () => {
      const style = getStyles.secondaryText();

      expect(style).to.deep.equal(styles.secondaryText);
    });

    it('should combine styles', () => {
      const style = getStyles.secondaryText({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
