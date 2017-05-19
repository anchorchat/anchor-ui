/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message/get-styles';
import styles from '../../src/message/styles';

describe('Message.getStyles', () => {
  describe('container', () => {
    it('should get styles', () => {
      const style = getStyles.container();

      expect(style).to.deep.equal(styles.messageContainer);
    });

    it('should add myMessage styles', () => {
      const style = getStyles.container(true);

      expect(style).to.have.property('flexDirection', 'row-reverse');
    });

    it('should add compact styles', () => {
      const style = getStyles.container(false, true);

      expect(style).to.have.property('flexDirection', 'row');
    });
  });
});
