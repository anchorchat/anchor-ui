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
      const style = getStyles.root(false, 'text', null, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.root(true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add image styles', () => {
      const style = getStyles.root(true, 'image', false, false);

      expect(style).to.have.property('padding', '5px 4px 4px');
      expect(style).to.have.property('borderRadius', '3px 0 3px');
    });

    it('should add collapsed styles', () => {
      const style = getStyles.root(true, 'image', false, true);

      expect(style).to.not.have.property('padding', '5px 4px 4px');
      expect(style).to.not.have.property('borderRadius');
      expect(style).to.have.property('opacity', '.75');
    });

    it('should add edited styles', () => {
      const style = getStyles.root(false, 'text', true, false, {});

      expect(style).to.have.property('width', 'auto');
    });
  });
});
