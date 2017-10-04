/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/message/image-message/get-styles';
import styles from '../../src/message/image-message/styles';

describe('ImageMessage.getStyles', () => {
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

    it('should add compact styles', () => {
      const style = getStyles.root('red', false, false, true);

      expect(style).to.have.property('marginLeft', '0');
    });

    it('should add collapsed styles', () => {
      const style = getStyles.root('red', false, false, true, true);

      expect(style).to.have.property('display', 'flex');
    });
  });

  describe('body', () => {
    it('should get styles', () => {
      const style = getStyles.body();

      expect(style).to.deep.equal(styles.body);
    });

    it('should combine styles', () => {
      const style = getStyles.body(false, 'small', false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add myMessage styles', () => {
      const style = getStyles.body(true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add small styles', () => {
      const style = getStyles.body(false, 'small');

      expect(style).to.have.property('fontSize', '16px');
    });

    it('should add medium styles', () => {
      const style = getStyles.body(false, 'medium');

      expect(style).to.have.property('fontSize', '18px');
    });

    it('should add large styles', () => {
      const style = getStyles.body(false, 'large');

      expect(style).to.have.property('fontSize', '22px');
    });

    it('should add collapsed styles', () => {
      const style = getStyles.body(false, 'small', true);

      expect(style).to.have.property('flexDirection', 'row');
    });
  });
});
