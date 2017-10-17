import colors from '../settings/colors';
import fade from '../internal/fade';
import styles from '../settings/styles';

export default {
  lightbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    pointerEvents: 'none',
    paddingTop: '56px'
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    zIndex: 1
  },
  image: {
    maxWidth: '90%',
    maxHeight: '90%',
    pointerEvents: 'all',
    borderRadius: '3px',
    boxShadow: styles.depthShadows[0]
  },
  clickAway: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '18px 56px',
    color: colors.white,
    fontSize: '18px',
    fontWeight: 'bolder',
    lineHeight: '20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: fade(colors.black, 0.4),
    textAlign: 'center',
    pointerEvents: 'all',
    height: '56px'
  },
};
