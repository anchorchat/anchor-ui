import colors from '../settings/colors';
import darken from '../internal/darken';
import styles from '../settings/styles';

export default {
  header: {
    minHeight: '32px',
    minWidth: '100%',
    position: 'relative',
    paddingTop: '8px',
    paddingRight: '40px',
    paddingLeft: '8px',
    paddingBottom: '8px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.white,
    backgroundColor: colors.theme,
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '16px',
    transition: 'background .3s ease-in-out',
    boxShadow: styles.depthShadows[0],

    ':hover': {
      backgroundColor: darken(colors.theme, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.theme, 0.15)
    }
  },
  icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '8px',
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
  },
  label: {
    fontSize: '16px',
    color: colors.secondaryText,
    fontWeight: 'bolder',
    padding: '0 0 8px',
    display: 'inline-block'
  },
  error: {
    display: 'block',
    paddingTop: '8px',
    paddingLeft: '8px',
    color: colors.error,
    fontSize: '14px'
  }
};
