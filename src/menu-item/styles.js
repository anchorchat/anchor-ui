import colors from '../settings/colors';
import darken from '../internal/darken';

const styleSheet = {
  root: {
    minHeight: '40px',
    width: '100%',
    position: 'relative',
    paddingTop: '8px',
    paddingRight: '8px',
    paddingLeft: '8px',
    paddingBottom: '8px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.primaryText,
    transition: 'background-color .3s ease-in-out',
    backgroundColor: colors.white,
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
    fontSize: '16px',
    lineHeight: '24px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'inherit',
    whiteSpace: 'nowrap'
  },
  icon: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    width: '24px',
    height: '24px'
  },
  rightButton: {
    position: 'absolute',
    top: '0',
    right: '8px',
    height: '40px',
    width: '40px'
  }
};

export default styleSheet;
