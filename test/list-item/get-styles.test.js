/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/list-item/get-styles';
import styles from '../../src/list-item/styles';

describe('ListItem.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root(null, false, false, false, false, 0, {});

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, false, false, false, 0, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red', true);

      expect(style[':hover']).to.have.property('backgroundColor', 'hsl(0, 100%, 47.5%)');
    });

    it('should add multi line styles', () => {
      const style = getStyles.root(null, false, false, false, true, 0, {});

      expect(style).to.have.property('height', '52px');
    });

    it('should add indention padding', () => {
      const style = getStyles.root(null, false, false, false, false, 1, {});

      expect(style).to.have.property('paddingLeft', '24px');
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

  describe('textContainer', () => {
    it('should get styles', () => {
      const style = getStyles.textContainer();

      expect(style).to.deep.equal(styles.text);
    });

    it('should add avatar styles', () => {
      const style = getStyles.textContainer(true, false);

      expect(style).to.have.property('width', 'calc(100% - 48px)');
    });

    it('should add rightButton styles', () => {
      const style = getStyles.textContainer(false, true);

      expect(style).to.have.property('width', 'calc(100% - 48px)');
    });

    it('should add avatar and rightButton styles', () => {
      const style = getStyles.textContainer(true, true);

      expect(style).to.have.property('width', 'calc(100% - 96px)');
    });
  });
});
