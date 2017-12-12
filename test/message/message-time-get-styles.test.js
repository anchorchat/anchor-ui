/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message/message-time/get-styles';
import styles from '../../src/message/message-time/styles';

describe('MessageTime.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root(false, 'text', false, 'small', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.root(true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add image styles', () => {
      const style = getStyles.root(false, 'image', false);

      expect(style).to.have.property('padding', '5px 4px 4px');
      expect(style).to.have.property('borderRadius', '3px 0 3px');
    });

    it('should add sticker styles', () => {
      const style = getStyles.root(false, 'sticker');

      expect(style).to.have.property('alignSelf', 'center');
      expect(style).to.have.property('paddingTop', '2px');
    });

    it('should add collapsed styles', () => {
      const style = getStyles.root(false, 'image', true);

      expect(style).to.not.have.property('padding', '5px 4px 4px');
      expect(style).to.not.have.property('borderRadius');
      expect(style).to.have.property('opacity', '.75');
    });

    it('should add medium styles', () => {
      const style = getStyles.root(false, 'image', false, 'medium');

      expect(style).to.have.property('fontSize', '14px');
      expect(style).to.have.property('lineHeight', '14px');
    });

    it('should add large styles', () => {
      const style = getStyles.root(false, 'image', false, 'large');

      expect(style).to.have.property('fontSize', '16px');
      expect(style).to.have.property('lineHeight', '16px');
    });
  });
});
