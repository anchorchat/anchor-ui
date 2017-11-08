/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/button/get-styles';
import styles from '../../src/button/styles';
import colors from '../../src/settings/colors';
import darken from '../../src/internal/darken';
import fade from '../../src/internal/fade';
import internalStyles from '../../src/settings/styles';

describe('Button.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.button);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, false, false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
      expect(style[':hover']).to.have.property('backgroundColor', darken('red', 0.15));
    });

    it('should add inverted styles', () => {
      const style = getStyles.root('red', true);

      expect(style).to.have.property('color', 'red');
      expect(style).to.have.property('backgroundColor', colors.white);
      expect(style[':hover']).to.have.property('backgroundColor', darken(colors.white, 0.15));
      expect(style[':active']).to.have.property('boxShadow', internalStyles.depthShadows[1]);
    });

    it('should add iconButton styles', () => {
      const style = getStyles.root('red', false, true);

      expect(style).to.deep.equal(styles.iconButton);
    });

    it('should add disabled styles', () => {
      const style = getStyles.root('red', false, false, true);

      expect(style).to.have.property('opacity', '0.5');
    });

    it('should add flatButton styles', () => {
      const style = getStyles.root('red', false, false, false, true);

      expect(style).to.have.property('backgroundColor', 'transparent');
      expect(style).to.have.property('boxShadow', 'none');
      expect(style).to.have.property('textTransform', 'uppercase');
      expect(style).to.have.property('flexShrink', 0);
      expect(style[':hover']).to.have.property('backgroundColor', fade(colors.black, 0.95));
      expect(style[':active']).to.have.property('backgroundColor', fade(colors.black, 0.85));
    });
  });
});
