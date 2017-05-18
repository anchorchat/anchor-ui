/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/avatar/get-styles';
import styles from '../../src/avatar/styles';

describe('Avatar.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root('');

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root({}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('status', () => {
    it('should get styles', () => {
      const style = getStyles.status();

      expect(style).to.deep.equal(styles.status);
    });

    it('should combine styles', () => {
      const style = getStyles.status({}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add online styles', () => {
      const style = getStyles.status('online');

      expect(style).to.have.property('backgroundColor', '#54D38A');
    });

    it('should add away styles', () => {
      const style = getStyles.status('away');

      expect(style).to.have.property('backgroundColor', '#F6A623');
    });

    it('should add offline styles', () => {
      const style = getStyles.status('offline');

      expect(style).to.have.property('backgroundColor', '#D0011B');
    });
  });
});
