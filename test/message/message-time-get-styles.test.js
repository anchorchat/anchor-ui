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
      const style = getStyles.root(false, 'text', null, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.root(true);

      expect(style).to.have.property('left', 0);
    });

    it('should add image styles', () => {
      const style = getStyles.root(true, 'image');

      expect(style).to.have.property('marginTop', '10px');
    });

    it('should add edited styles', () => {
      const style = getStyles.root(false, 'text', true, {});

      expect(style).to.have.property('width', 'auto');
    });
  });
});
