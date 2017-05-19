/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/channel-header/get-styles';
import styles from '../../src/channel-header/styles';

describe('ChannelHeader.getStyles', () => {
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

  describe('text', () => {
    it('should get styles', () => {
      const style = getStyles.text();

      expect(style).to.deep.equal(styles.text);
    });

    it('should combine styles', () => {
      const style = getStyles.text({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('LeftButton', () => {
    it('should get styles', () => {
      const style = getStyles.leftButton();

      expect(style).to.deep.equal(styles.leftButton);
    });

    it('should combine styles', () => {
      const style = getStyles.leftButton({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('RightButton', () => {
    it('should get styles', () => {
      const style = getStyles.rightButton();

      expect(style).to.deep.equal(styles.rightButton);
    });

    it('should combine styles', () => {
      const style = getStyles.rightButton({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
