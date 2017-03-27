/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/tabs/get-styles';
import styles from '../../src/tabs/styles';

describe('Tabs.getStyles', () => {
  describe('tabContainer', () => {
    it('should get styles', () => {
      const style = getStyles.tabContainer();

      expect(style).to.deep.equal(styles.tabContainer);
    });

    it('should combine styles', () => {
      const style = getStyles.tabContainer({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('tabContent', () => {
    it('should get styles', () => {
      const style = getStyles.tabContent();

      expect(style).to.deep.equal(styles.tabContent);
    });

    it('should add selected styles', () => {
      const style = getStyles.tabContent(true);

      expect(style).to.have.property('display', 'block');
    });
  });
});
