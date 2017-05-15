/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message-input/get-styles';
import styles from '../../src/message-input/styles';

describe('MessageInput.getStyles', () => {
  describe('button', () => {
    it('should get styles', () => {
      const style = getStyles.button();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.button({ color: 'red' }, true);

      expect(style).to.have.property('color', 'red');
    });

    it('should add disabled styles', () => {
      const style = getStyles.button({}, true);

      expect(style).to.have.property('opacity', '0.38');
    });
  });

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input();

      expect(style).to.deep.equal(styles.messageInput);
    });

    it('should combine styles', () => {
      const style = getStyles.input(true, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add right button styles', () => {
      const style = getStyles.input(true);

      expect(style).to.have.property('paddingRight', '48px');
    });
  });
});
