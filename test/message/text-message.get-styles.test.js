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
      const style = getStyles.root('red', false, false, false, { color: 'red' });

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
  });
});
