/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message/message-header/get-styles';
import styles from '../../src/message/message-header/styles';

describe('MessageHeader.getStyles', () => {
  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header(false, false, 'small', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.header(true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add compact styles', () => {
      const style = getStyles.header(false, true);

      expect(style).to.have.property('marginRight', '10px');
    });

    it('should add small styles', () => {
      const style = getStyles.header(false, false, 'small');

      expect(style).to.have.property('fontSize', '14px');
    });

    it('should add medium styles', () => {
      const style = getStyles.header(false, false, 'medium');

      expect(style).to.have.property('fontSize', '16px');
    });

    it('should add large styles', () => {
      const style = getStyles.header(false, false, 'large');

      expect(style).to.have.property('fontSize', '18px');
    });
  });

  describe('avatar', () => {
    it('should get styles', () => {
      const style = getStyles.avatar();

      expect(style).to.deep.equal(styles.avatar);
    });

    it('should add myMessage styles', () => {
      const style = getStyles.avatar(true);

      expect(style).to.have.property('right', '-66px');
    });
  });

  describe('arrow', () => {
    it('should get styles', () => {
      const style = getStyles.arrow();

      expect(style).to.deep.equal(styles.arrow);
    });

    it('should add myMessage styles', () => {
      const style = getStyles.arrow(true);

      expect(style).to.have.property('borderRight', '10px solid');
    });
  });
});
