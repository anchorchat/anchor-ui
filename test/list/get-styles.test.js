/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/list/get-styles';
import styles from '../../src/list/styles';

describe('List.getStyles', () => {
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

  describe('listHeader', () => {
    it('should get styles', () => {
      const style = getStyles.listHeader();

      expect(style).to.deep.equal(styles.listHeader);
    });

    it('should combine styles', () => {
      const style = getStyles.listHeader({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('list', () => {
    it('should get styles', () => {
      const style = getStyles.list();

      expect(style).to.deep.equal(styles.list);
    });

    it('should combine styles', () => {
      const style = getStyles.list(null, null, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add header styles', () => {
      const style = getStyles.list(true, null, {});

      expect(style).to.have.property('height', 'calc(100% - 36px)');
    });

    it('should add infinite scroll styles', () => {
      const style = getStyles.list(null, true, {});

      expect(style).to.have.property('overflowY', 'hidden');
    });
  });
});
