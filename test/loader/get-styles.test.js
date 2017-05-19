/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/loader/get-styles';
import styles from '../../src/loader/styles';

describe('Loader.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.dot);
    });

    it('should combine styles', () => {
      const style = getStyles.root('red', false, 1, { color: 'red' });

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

    it('should add index 1 styles', () => {
      const style = getStyles.root('red', false, 1);

      expect(style).to.have.property('animationDelay', '.33s');
    });

    it('should add index 2 styles', () => {
      const style = getStyles.root('red', false, 2);

      expect(style).to.have.property('animationDelay', '.66s');
    });
  });
});
