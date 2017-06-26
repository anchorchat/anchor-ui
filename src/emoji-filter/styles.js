import colors from '../settings/colors';
import styles from '../settings/styles';
import darken from '../internal/darken';

export default {
  root: {
    borderRadius: '3px',
    backgroundColor: colors.white,
    overflow: 'hidden',
    width: '100%',
    maxHeight: '200px',
    boxShadow: styles.depthShadows[0]
  },
  header: {
    backgroundColor: colors.background
  },
  commands: {
    height: 'calc(100% - 40px)',
    overflowY: 'scroll',
    display: 'flex',
    flexWrap: 'wrap'
  },
  command: {
    height: '32px',
    boxSizing: 'border-box',
    padding: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    color: colors.secondaryText,
    transition: 'all .3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    ':hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  },
  attributionLink: {
    color: colors.secondaryText,
    fontWeight: 'inherit',
    fontSize: '14px',
    textDecoration: 'none'
  },
};
