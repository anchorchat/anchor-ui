/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/emoji-filter/get-styles';
import styles from '../../src/emoji-filter/styles';

describe('EmojiFilter.getStyles', () => {
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

  describe('commands', () => {
    it('should get styles', () => {
      const style = getStyles.commands();

      expect(style).to.deep.equal(styles.commands);
    });

    it('should combine styles', () => {
      const style = getStyles.commands({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('emoji', () => {
    it('should get styles', () => {
      const style = getStyles.emoji();

      expect(style).to.deep.equal(styles.emoji);
    });

    it('should add selected styles', () => {
      const style = getStyles.emoji(undefined, true);

      expect(style).to.have.property('backgroundColor', '#1BA6C4');
      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add theme color', () => {
      const style = getStyles.emoji('HotPink', true);

      expect(style).to.have.property('backgroundColor', 'HotPink');
      expect(style).to.have.property('color', '#FEFEFE');
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

  describe('description', () => {
    it('should get styles', () => {
      const style = getStyles.description();

      expect(style).to.deep.equal(styles.description);
    });

    it('should combine styles', () => {
      const style = getStyles.description({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
