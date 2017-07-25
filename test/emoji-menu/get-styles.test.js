/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/emoji-menu/get-styles';
import styles from '../../src/emoji-menu/styles';

describe('EmojiMenu.getStyles', () => {
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

  describe('categories', () => {
    it('should get styles', () => {
      const style = getStyles.categories();

      expect(style).to.deep.equal(styles.categories);
    });

    it('should combine styles', () => {
      const style = getStyles.categories({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('categoriesCategory', () => {
    it('should get styles', () => {
      const style = getStyles.categoriesCategory();

      expect(style).to.deep.equal(styles.categories.category);
    });

    it('should combine styles', () => {
      const style = getStyles.categoriesCategory({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('category', () => {
    it('should get styles', () => {
      const style = getStyles.category();

      expect(style).to.deep.equal(styles.category);
    });

    it('should combine styles', () => {
      const style = getStyles.category({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('categoryEmoji', () => {
    it('should get styles', () => {
      const style = getStyles.categoryEmoji();

      expect(style).to.deep.equal(styles.category.emoji);
    });

    it('should combine styles', () => {
      const style = getStyles.categoryEmoji({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('modifierHeader', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('modifier', () => {
    it('should get styles', () => {
      const style = getStyles.modifier();

      expect(style).to.deep.equal(styles.modifier);
    });

    it('should combine styles', () => {
      const style = getStyles.modifier(false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add active styles', () => {
      const style = getStyles.modifier(true);

      expect(style).to.have.property('transform', 'scale(1.2)');
    });
  });
});
