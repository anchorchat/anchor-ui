/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message-input/get-styles';
import styles from '../../src/message-input/styles';

describe('MessageInput.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();
      expect(style).to.deep.equal(styles.root);
    });

    it('should get disabled styles', () => {
      const style = getStyles.root(true, 32, false, { color: 'red' });
      expect(style).to.have.property('opacity', '0.5');
    });

    it('should get multiLine styles', () => {
      const style = getStyles.root(false, 32, true, { color: 'red' });
      expect(style).to.have.property('alignItems', 'flex-end');
    });

    it('should combine styles', () => {
      const style = getStyles.root(false, 32, false, { color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });

  describe('input', () => {
    it('should get styles', () => {
      const style = getStyles.input();
      expect(style).to.deep.equal(styles.input);
    });

    it('should combine styles', () => {
      const style = getStyles.input({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });
});
