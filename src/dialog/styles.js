import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  dialog: {
    width: '80%',
    maxWidth: '360px',
    margin: '0 auto',
    backgroundColor: colors.theme,
    color: colors.white,
    borderRadius: '4px',
    padding: '40px 30px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: styles.depthShadows[0],
    overflow: 'auto',
    transition: 'background .3s ease-in-out',
    fontSize: '16px'
  },
  header: {
    color: 'inherit',
    fontSize: '24px',
    fontWeight: 'bolder',
    margin: '0 0 16px'
  },
  closeButton: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    zIndex: 1
  },
  clickAway: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer'
  }
};
