/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/empty-state/get-styles';
import styles from '../../src/empty-state/styles';

describe('EmptyState.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root('');

      expect(style).to.deep.equal(styles.emptyState);
    });

    it('should combine styles', () => {
      const style = getStyles.root('', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add backgroundImage', () => {
      const style = getStyles.root('http://lorempixel.com/400/200');

      expect(style).to.have.property('backgroundImage', 'url(http://lorempixel.com/400/200)');
    });
  });

  describe('heading', () => {
    it('should get styles', () => {
      const style = getStyles.heading();

      expect(style).to.deep.equal(styles.heading);
    });

    it('should combine styles', () => {
      const style = getStyles.heading({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('body', () => {
    it('should get styles', () => {
      const style = getStyles.body();

      expect(style).to.deep.equal(styles.body);
    });

    it('should combine styles', () => {
      const style = getStyles.body({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
