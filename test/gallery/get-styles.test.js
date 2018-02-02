/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/gallery/get-styles';
import styles from '../../src/gallery/styles';

describe('Gallery.getStyles', () => {
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

  describe('itemContainer', () => {
    it('should get styles', () => {
      const style = getStyles.itemContainer();

      expect(style).to.deep.equal(styles.itemContainer);
    });

    it('should combine styles', () => {
      const style = getStyles.itemContainer(null, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add height', () => {
      const style = getStyles.itemContainer(240);

      expect(style).to.have.property('height', 240);
    });

    it('should add cursor', () => {
      const style = getStyles.itemContainer(null, true);

      expect(style).to.have.property('cursor', 'pointer');
    });
  });

  describe('item', () => {
    it('should get styles', () => {
      const style = getStyles.item();

      expect(style).to.deep.equal(styles.item);
    });

    it('should combine styles', () => {
      const style = getStyles.item(null, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add height', () => {
      const style = getStyles.item(240);

      expect(style).to.have.property('height', 240);
    });
  });
});
