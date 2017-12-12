/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message/text-message/get-styles';
import styles from '../../src/message/text-message/styles';

describe('TextMessage.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.message);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, false, false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add avatar styles', () => {
      const style = getStyles.root('red', false, true);

      expect(style).to.have.property('marginLeft', '48px');
    });

    it('should add myAvatar styles', () => {
      const style = getStyles.root('red', true, true);

      expect(style).to.have.property('marginLeft', '0');
    });

    it('should add compact styles', () => {
      const style = getStyles.root('red', false, false, true);

      expect(style).to.have.property('marginRight', '0');
    });

    it('should add iconMenu styles', () => {
      const style = getStyles.root('red', false, false, true, true);

      expect(style).to.have.property('padding', '12px 40px 12px 12px');
    });
  });

  describe('body', () => {
    it('should get styles', () => {
      const style = getStyles.body();

      expect(style).to.deep.equal(styles.body);
    });

    it('should combine styles', () => {
      const style = getStyles.body(false, 'small', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.body(true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add medium styles', () => {
      const style = getStyles.body(false, 'medium');

      expect(style).to.have.property('fontSize', '18px');
      expect(style).to.have.property('lineHeight', '24px');
    });

    it('should add large styles', () => {
      const style = getStyles.body(false, 'large');

      expect(style).to.have.property('fontSize', '22px');
      expect(style).to.have.property('lineHeight', '28px');
    });
  });

  describe('mention', () => {
    it('should get styles', () => {
      const style = getStyles.mention();

      expect(style).to.deep.equal(styles.mention);
    });

    it('should add myMessage styles', () => {
      const style = getStyles.mention('red', true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add onClick styles', () => {
      const style = getStyles.mention('red', false, true);

      expect(style).to.have.property('cursor', 'pointer');
    });
  });
});
