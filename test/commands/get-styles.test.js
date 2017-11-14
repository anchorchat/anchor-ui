/* eslint-env mocha */
import { expect } from 'chai';
import getStyles from '../../src/commands/get-styles';
import styles from '../../src/commands/styles';

describe('Commands.getStyles', () => {
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

  describe('header', () => {
    it('should get styles', () => {
      const style = getStyles.header();

      expect(style).to.deep.equal(styles.header);
    });

    it('should combine styles', () => {
      const style = getStyles.header({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('commands', () => {
    it('should get styles', () => {
      const style = getStyles.commands();

      expect(style).to.deep.equal(styles.commands);
    });

    it('should combine styles', () => {
      const style = getStyles.commands({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('command', () => {
    it('should get styles', () => {
      const style = getStyles.command();

      expect(style).to.deep.equal(styles.command);
    });

    it('should combine styles', () => {
      const style = getStyles.command(undefined, false, { color: 'red' });

      expect(style).to.have.property('color', 'red');
    });

    it('should add active styles', () => {
      const style = getStyles.command(undefined, true, {});

      expect(style).to.have.property('backgroundColor', '#1BA6C4');
      expect(style).to.have.property('color', '#FEFEFE');
    });

    it('should add color to active styles', () => {
      const style = getStyles.command('HotPink', true, {});

      expect(style).to.have.property('backgroundColor', 'HotPink');
      expect(style).to.have.property('color', '#FEFEFE');
    });
  });

  describe('title', () => {
    it('should get styles', () => {
      const style = getStyles.title();

      expect(style).to.deep.equal(styles.title);
    });

    it('should combine styles', () => {
      const style = getStyles.title({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });

  describe('description', () => {
    it('should get styles', () => {
      const style = getStyles.description();

      expect(style).to.deep.equal(styles.description);
    });

    it('should combine styles', () => {
      const style = getStyles.description({ color: 'red' });

      expect(style).to.have.property('color', 'red');
    });
  });
});
