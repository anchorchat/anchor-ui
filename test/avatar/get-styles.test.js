/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/avatar/get-styles';
import styles from '../../src/avatar/styles';
import colors from '../../src/settings/colors';

describe('Avatar.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root('');

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root(false, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add defaultImage styles', () => {
      const style = getStyles.root('image1', 'image2');

      expect(style).to.have.property('backgroundImage', 'url(image1), url(image2)');
    });
  });

  describe('status', () => {
    it('should get styles', () => {
      const style = getStyles.status();

      expect(style).to.deep.equal(styles.status);
    });

    it('should get default status style', () => {
      const style = getStyles.status();

      expect(style).to.have.property('backgroundColor', colors.offline);
    });

    it('should combine styles', () => {
      const style = getStyles.status('online', { color: 'red' });

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
