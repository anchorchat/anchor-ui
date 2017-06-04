/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/list-item/get-styles';
import styles from '../../src/list-item/styles';

describe('ListItem.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root(null, false, false, false, true, {});

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, false, false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red', true);

      expect(style[':hover']).to.have.property('backgroundColor', 'hsl(0, 100%, 47.5%)');
    });

    it('should add rightButton styles', () => {
      const style = getStyles.root('red', false, true);

      expect(style).to.have.property('paddingRight', '52px');
    });

    it('should add avatar styles', () => {
      const style = getStyles.root('red', false, false, true);

      expect(style).to.have.property('paddingLeft', '56px');
    });

    it('should add single-line styles', () => {
      const style = getStyles.root();

      expect(style).to.have.property('height', '48px');
    });
  });

  describe('text', () => {
    it('should get styles', () => {
      const style = getStyles.text();

      expect(style).to.deep.equal(styles.textStyle);
    });

    it('should combine styles', () => {
      const style = getStyles.text({}, false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add active styles', () => {
      const style = getStyles.text({}, true);

      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add textBadge styles', () => {
      const style = getStyles.text({}, false, true);

      expect(style).to.have.property('lineHeight', '22px');
    });
  });

  describe('nestedListButton', () => {
    it('should get styles', () => {
      const style = getStyles.nestedListButton();

      expect(style).to.deep.equal(styles.button);
    });

    it('should add open styles', () => {
      const style = getStyles.nestedListButton(true);

      expect(style).to.have.property('transform', 'rotate(180deg)');
    });
  });
});
