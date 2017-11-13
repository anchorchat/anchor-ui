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
        bottom: 398,
        height: 40,
        left: 95,
        right: 135,
        top: 358,
        width: 40
      };
      const popOver = {
        bottom: 627,
        height: 229,
        left: 44,
        right: 244,
        top: 398,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal(398);
      expect(position.right).to.equal('initial');
      expect(position.bottom).to.equal('initial');
      expect(position.left).to.equal(35);
    });

    it('should position popOver middle from and above button', () => {
      const button = {
        bottom: 460,
        height: 40,
        left: 95,
        right: 135,
        top: 420,
        width: 40
      };
      const popOver = {
        bottom: 679,
        height: 229,
        left: 34,
        right: 234,
        top: 450,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal('initial');
      expect(position.right).to.equal('initial');
      expect(position.bottom).to.equal(260);
      expect(position.left).to.equal(35);
    });

    it('should position popOver left from and middle button', () => {
      const button = {
        bottom: 360,
        height: 40,
        left: 205,
        right: 245,
        top: 320,
        width: 40
      };
      const popOver = {
        bottom: 132,
        height: 349,
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
      expect(position.bottom).to.equal(165.5);
      expect(position.left).to.equal('initial');
    });

    it('should position popOver right from and middle button', () => {
      const button = {
        bottom: 360,
        height: 40,
        left: 5,
        right: 45,
        top: 320,
        width: 40
      };
      const popOver = {
        bottom: 132,
        height: 349,
        left: 25,
        right: 225,
        top: 277,
        width: 180
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal('initial');
      expect(position.right).to.equal('initial');
      expect(position.bottom).to.equal(165.5);
      expect(position.left).to.equal(25);
    });

    it('should postion popOver offset left from button', () => {
      const button = {
        bottom: 398,
        height: 40,
        left: 55,
        right: 95,
        top: 358,
        width: 40
      };
      const popOver = {
        bottom: 627,
        height: 229,
        left: 44,
        right: 244,
        top: 398,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal(398);
      expect(position.right).to.equal('initial');
      expect(position.bottom).to.equal('initial');
      expect(position.left).to.equal(16);
    });

    it('should postion popOver offset right from button', () => {
      const button = {
        bottom: 398,
        height: 40,
        left: 155,
        right: 195,
        top: 358,
        width: 40
      };
      const popOver = {
        bottom: 627,
        height: 229,
        left: 44,
        right: 244,
        top: 398,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal(398);
      expect(position.right).to.equal(16);
      expect(position.bottom).to.equal('initial');
      expect(position.left).to.equal('initial');
    });

    it('should position popOver offset top from button', () => {
      const button = {
        bottom: 290,
        height: 40,
        left: 205,
        right: 245,
        top: 250,
        width: 40
      };
      const popOver = {
        bottom: 132,
        height: 629,
        left: 25,
        right: 225,
        top: 277,
        width: 200
      };
      const position = getPopOverPosition(button, popOver);

      expect(position.position).to.equal('fixed');
      expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
      expect(position.top).to.equal(16);
      expect(position.right).to.equal(25);
      expect(position.bottom).to.equal('initial');
      expect(position.left).to.equal('initial');
    });

    it('should position popOver offset top from button', () => {
      const button = {
        bottom: 430,
        height: 40,
        left: 205,
        right: 245,
        top: 390,
        width: 40
      };
      const popOver = {
        bottom: 132,
        height: 629,
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
      expect(position.bottom).to.equal(16);
      expect(position.left).to.equal('initial');
    });
  });
});
