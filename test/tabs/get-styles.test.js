/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/tabs/get-styles';
import styles from '../../src/tabs/styles';

describe('Tabs.getStyles', () => {
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

  describe('contentContainer', () => {
    it('should get styles', () => {
      const style = getStyles.contentContainer();

      expect(style).to.deep.equal(styles.contentContainer);
    });

    it('should combine styles', () => {
      const style = getStyles.contentContainer({ color: 'red' });

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
