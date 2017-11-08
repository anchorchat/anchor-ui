/* eslint-env mocha */
import { expect } from 'chai';
import getPopOverPosition from '../../src/internal/get-pop-over-position';

describe('getPopOverPosition', () => {
  before(() => {
    global.window = {
      innerWidth: 900,
      innerHeight: 680
    };
  });

  after(() => {
    delete global.window;
  });

  it('should position popOver left from and below button', () => {
    const button = {
      bottom: 48,
      height: 40,
      left: 856,
      right: 896,
      top: 8,
      width: 40
    };
    const popOver = {
      bottom: 303,
      height: 255,
      left: 676,
      right: 876,
      top: 48,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal(48);
    expect(position.right).to.equal(24);
    expect(position.bottom).to.equal('initial');
    expect(position.left).to.equal('initial');
  });

  it('should position popOver right from and below button', () => {
    const button = {
      bottom: 48,
      height: 40,
      left: 4,
      right: 44,
      top: 8,
      width: 40
    };
    const popOver = {
      bottom: 303,
      height: 255,
      left: 24,
      right: 224,
      top: 48,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal(48);
    expect(position.right).to.equal('initial');
    expect(position.bottom).to.equal('initial');
    expect(position.left).to.equal(24);
  });

  it('should position popOver right from and above button', () => {
    const button = {
      bottom: 672,
      height: 40,
      left: 4,
      right: 44,
      top: 632,
      width: 40
    };
    const popOver = {
      bottom: 632,
      height: 255,
      left: 24,
      right: 224,
      top: 377,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal('initial');
    expect(position.right).to.equal('initial');
    expect(position.bottom).to.equal(48);
    expect(position.left).to.equal(24);
  });

  it('should position popOver left from and above button', () => {
    const button = {
      bottom: 672,
      height: 40,
      left: 856,
      right: 896,
      top: 632,
      width: 40
    };
    const popOver = {
      bottom: 632,
      height: 255,
      left: 24,
      right: 224,
      top: 377,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal('initial');
    expect(position.right).to.equal(24);
    expect(position.bottom).to.equal(48);
    expect(position.left).to.equal('initial');
  });

  it('should position popOver above or below button if type equals select', () => {
    const button = {
      bottom: 672,
      height: 40,
      left: 856,
      right: 896,
      top: 632,
      width: 40
    };
    const popOver = {
      bottom: 632,
      height: 255,
      left: 24,
      right: 224,
      top: 377,
      width: 200
    };
    const position = getPopOverPosition(button, popOver, 'select');

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.right).to.equal('initial');
    expect(position.left).to.equal(button.left);
  });


  describe('getPopOverPosition middle', () => {
    before(() => {
      global.window = {
        innerWidth: 250,
        innerHeight: 680
      };
    });

    after(() => {
      delete global.window;
    });

    it('should postion popOver middle from and below button', () => {
      const button = {
        bottom: 48,
        height: 40,
        left: 155,
        right: 195,
        top: 8,
        width: 40
      };
      const popOver = {
        bottom: 303,
        height: 255,
        left: 75,
        right: 175,
        top: 48,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal(48);
      expect(position.right).to.equal(75);
      expect(position.bottom).to.equal('initial');
      expect(position.left).to.equal('initial');
    });

    it('should position popOver middle from and above button', () => {
      const button = {
        bottom: 672,
        height: 40,
        left: 155,
        right: 195,
        top: 632,
        width: 40
      };
      const popOver = {
        bottom: 632,
        height: 255,
        left: 75,
        right: 175,
        top: 377,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal('initial');
      expect(position.right).to.equal(75);
      expect(position.bottom).to.equal(48);
      expect(position.left).to.equal('initial');
    });

    it('should position popOver left from and middle button', () => {
      const button = {
        bottom: 172,
        height: 40,
        left: 205,
        right: 245,
        top: 132,
        width: 40
      };
      const popOver = {
        bottom: 132,
        height: 555,
        left: 25,
        right: 225,
        top: 277,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal('initial');
      expect(position.right).to.equal(25);
      expect(position.bottom).to.equal(250.5);
      expect(position.left).to.equal('initial');
    });

    it('should position popOver right from and middle button', () => {
      const button = {
        bottom: 172,
        height: 40,
        left: 5,
        right: 25,
        top: 132,
        width: 40
      };
      const popOver = {
        bottom: 132,
        height: 555,
        left: 225,
        right: 5,
        top: 277,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal('initial');
      expect(position.right).to.equal('initial');
      expect(position.bottom).to.equal(250.5);
      expect(position.left).to.equal(25);
    });
  });
});
