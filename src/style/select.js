import colors from '../settings/colors';
import darken from '../internal/darken';

const styleSheet = {
  container: {
    position: 'relative',
    minWidth: '200px'
  },
  header: {
    minHeight: '44px',
    minWidth: '100%',
    position: 'relative',
    paddingTop: '10px',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingBottom: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.white,
    backgroundColor: colors.theme,
    borderRadius: '3px',
    boxShadow: `${colors.boxShadow} 0px 1px 6px, ${colors.boxShadow} 0px 1px 4px`,
    ':hover': {
      backgroundColor: darken(colors.theme, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.theme, 0.15)
    }
  },
  icon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '24px',
    height: '24px',
    transition: 'transform .3s ease-in-out',
  },
  clickAway: {
    pointerEvents: 'all',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0
  }
};

export default styleSheet;
