import colors from '../settings/colors';
import fade from '../internal/fade';

const styleSheet = {
  wrapper: {
    width: '40px',
    height: '20px',
    position: 'relative',
    cursor: 'pointer'
  },
  knob: {
    background: colors.white,
    width: '20px',
    height: '20px',
    boxShadow: `${colors.boxShadow} 0px 1px 6px, ${colors.boxShadow} 0px 1px 4px`,
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'all .3s ease-in-out'
  },
  track: {
    background: colors.grey,
    width: '34px',
    height: '14px',
    position: 'relative',
    top: '3px',
    left: '3px',
    borderRadius: '30px',
    transition: 'all .3s ease-in-out'
  },
  knobActive: {
    background: colors.theme,
    left: '20px'
  },
  trackActive: {
    background: fade(colors.theme, 0.5),
  }
};

export default styleSheet;
