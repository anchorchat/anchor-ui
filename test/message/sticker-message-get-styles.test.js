/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message/sticker-message/get-styles';
import styles from '../../src/message/sticker-message/styles';

describe('StickerMessage.getStyles', () => {
  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.message);
    });

    it('should combine styles', () => {
      const style = getStyles.header('red', false, false, false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.header('red', true);

      expect(style).to.have.property('backgroundColor', 'red');
      expect(style).to.have.property('borderRightColor', 'red');
    });

    it('should add avatar styles', () => {
      const style = getStyles.header('red', false, true);

      expect(style).to.have.property('marginLeft', '48px');
    });

    it('should add myAvatar styles', () => {
      const style = getStyles.header('red', true, true);

      expect(style).to.have.property('marginLeft', '0');
      expect(style).to.have.property('marginRight', '48px');
    });

    it('should add compact styles', () => {
      const style = getStyles.header('red', false, false, true);

      expect(style).to.have.property('marginLeft', '0');
      expect(style).to.have.property('marginRight', '0');
      expect(style).to.have.property('maxWidth', '100%');
    });

    it('should add iconMenu styles', () => {
      const style = getStyles.header('red', false, false, false, true);

      expect(style).to.have.property('padding', '13px 48px 13px 13px');
    });
  });

  describe('body', () => {
    it('should get styles', () => {
      const style = getStyles.body();

      expect(style).to.deep.equal(styles.body);
    });

    it('should combine styles', () => {
      const style = getStyles.body(false, false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.body(true);

      expect(style).to.have.property('marginLeft', '0');
      expect(style).to.have.property('marginRight', '16px');
      expect(style).to.have.property('alignSelf', 'flex-end');
    });

    it('should add avatar styles', () => {
      const style = getStyles.body(false, true);

      expect(style).to.have.property('marginLeft', '48px');
    });

    it('should add myAvatar styles', () => {
      const style = getStyles.body(true, true);

      expect(style).to.have.property('marginLeft', '0');
      expect(style).to.have.property('marginRight', '48px');
    });

    it('should add compact styles', () => {
      const style = getStyles.body(false, false, true);

      expect(style).to.have.property('alignSelf', 'flex-start');
      expect(style).to.have.property('marginLeft', 0);
      expect(style).to.have.property('marginRight', 0);
    });
  });
});
