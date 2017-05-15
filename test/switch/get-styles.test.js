/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/switch/get-styles';
import styles from '../../src/switch/styles';

describe('Switch.getStyles', () => {
  describe('knob', () => {
    it('should get styles', () => {
      const style = getStyles.knob();

      expect(style).to.deep.equal(styles.knob);
    });

    it('should combine styles', () => {
      const style = getStyles.knob({}, {}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.knob('red', true);

      expect(style).to.have.property('background', 'red');
    });

    it('should add active styles', () => {
      const style = getStyles.knob({}, true);

      expect(style).to.have.property('left', '20px');
    });
  });

  describe('track', () => {
    it('should get styles', () => {
      const style = getStyles.track();

      expect(style).to.deep.equal(styles.track);
    });

    it('should combine styles', () => {
      const style = getStyles.track('red', {}, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should change theme color', () => {
      const style = getStyles.track('red', true);

      expect(style).to.have.property('background', 'rgba(255, 0, 0, 0.5)');
    });

    it('should add active styles', () => {
      const style = getStyles.track('red', true);

      expect(style).to.have.property('background', 'rgba(255, 0, 0, 0.5)');
    });
  });
});
