import { colors } from '../settings';
import darken from '../internal/darken';

const styleSheet = {
  menuItem: {
    minHeight: '44px',
    minWidth: '100%',
    position: 'relative',
    paddingTop: '10px',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingBottom: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.primary,
    transition: 'background-color .3s ease-in-out',
    ':hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  },
  text: {
    margin: 0,
    color: 'inherit',
    lineHeight: '24px'
  },
  icon: {
    position: 'absolute',
    top: '10px',
    left: '8px',
    height: '24px'
  },
  activeIcon: {
    position: 'absolute',
    top: '10px',
    right: '8px',
    height: '24px',
    width: '24px'
  }
};

export default styleSheet;
