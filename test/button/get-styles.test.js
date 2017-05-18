/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/button/get-styles';
import styles from '../../src/button/styles';

describe('Button.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.button);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add inverted styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('backgroundColor', '#FEFEFE');
    });

    it('should add iconButton styles', () => {
      const style = getStyles.root('red', {}, true);

      expect(style).to.have.property('borderRadius', '50%');
    });

    it('should add disabled styles', () => {
      const style = getStyles.root('red', {}, {}, true);

      expect(style).to.have.property('opacity', '0.38');
    });

    it('should add flatButton styles', () => {
      const style = getStyles.root('red', false, {}, {}, true);

      expect(style).to.have.property('backgroundColor', 'transparent');
    });
  });
});
