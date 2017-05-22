/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message-list/get-styles';
import styles from '../../src/message-list/styles';

describe('MessageList.getStyles', () => {
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

  describe('list', () => {
    it('should get styles', () => {
      const style = getStyles.list();
      expect(style).to.deep.equal(styles.list);
    });

    it('should combine styles', () => {
      const style = getStyles.list({ color: 'red' });
      expect(style).to.have.property('color', 'red');
    });
  });
});
