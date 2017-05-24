/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/alert/get-styles';
import styles from '../../src/alert/styles';

describe('Alert.getStyles', () => {
  describe('root', () => {
    it('should get styles', () => {
      const style = getStyles.root();

      expect(style).to.deep.equal(styles.root);
    });

    it('should combine styles', () => {
      const style = getStyles.root('success', { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add success type styles', () => {
      const style = getStyles.root('success');

      expect(style).to.have.property('backgroundColor', '#DDF3D5');
    });

    it('should add error type styles', () => {
      const style = getStyles.root('error');

      expect(style).to.have.property('backgroundColor', '#EDC8C5');
    });

    it('should add warning type styles', () => {
      const style = getStyles.root('warning');

      expect(style).to.have.property('backgroundColor', '#F8F4D5');
    });

    it('should add info type styles', () => {
      const style = getStyles.root('info');

      expect(style).to.have.property('backgroundColor', '#CDE8F5');
    });
  });

  describe('icon', () => {
    it('should get styles', () => {
      const style = getStyles.icon();

      expect(style).to.deep.equal(styles.icon);
    });

    it('should combine styles', () => {
      const style = getStyles.icon({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('text', () => {
    it('should get styles', () => {
      const style = getStyles.text();

      expect(style).to.deep.equal(styles.text);
    });

    it('should combine styles', () => {
      const style = getStyles.text({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('button', () => {
    it('should get styles', () => {
      const style = getStyles.button();

      expect(style).to.deep.equal(styles.button);
    });

    it('should combine styles', () => {
      const style = getStyles.button({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
