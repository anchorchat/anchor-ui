import colors from '../settings/colors';
import darken from '../internal/darken';
import fade from '../internal/fade';
import styles from '../settings/styles';

export default {
  iconButton: {
    background: 'none',
    borderRadius: '50%',
    border: 0,
    cursor: 'pointer',
    height: '40px',
    outline: 0,
    padding: '8px',
    transition: 'all .3s ease-in-out',
    width: '40px',
    ':hover': {
      background: fade(colors.black, 0.9)
    },
    ':active': {
      boxShadow: styles.depthShadows[0]
    }
  },
  button: {
    backgroundColor: colors.theme,
    border: 0,
    borderRadius: '3px',
    boxShadow: styles.depthShadows[0],
    color: colors.white,
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '20px',
    outline: 0,
    padding: '6px 12px',
    transition: 'all .3s ease-in-out',
    ':hover': {
      backgroundColor: darken(colors.theme, 0.15)
    },
    ':active': {
      boxShadow: styles.depthShadows[1]
    }
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white,
    ':hover': {
      backgroundColor: darken(colors.white, 0.15)
    },
    ':active': {
      boxShadow: styles.depthShadows[1]
    }
  },
  disabled: {
    opacity: '0.38'
  },
  flatButton: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textTransform: 'uppercase',
    ':hover': {
      backgroundColor: fade(colors.black, 0.95)
    },
    ':active': {
      backgroundColor: fade(colors.black, 0.85)
    }
  }
};
