/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/profile-card/get-styles';
import styles from '../../src/profile-card/styles';

describe('ProfileCard.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.profileCard);
    });

    it('should combine styles', () => {
      const style = getStyles.root({}, {}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.root('red');

      expect(style).to.have.property('backgroundColor', 'red');
    });

    it('should add avatar styles', () => {
      const style = getStyles.root({}, true);

      expect(style).to.have.property('lineHeight', '40px');
    });
  });
});
