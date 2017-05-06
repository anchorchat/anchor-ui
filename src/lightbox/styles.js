import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  lightbox: {
    height: '80%',
    maxWidth: '100%',
    margin: '0 auto',
    background: colors.white,
    borderRadius: '3px',
    padding: '40px 30px',
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: styles.depthShadows[0]
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    zIndex: 1
  },
  image: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%'
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
