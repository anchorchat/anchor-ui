import styles from '../settings/styles';

export default {
  lightbox: {
    height: '80%',
    maxWidth: '100%',
    margin: '0 auto',
    borderRadius: '3px',
    padding: '40px 30px',
    boxSizing: 'border-box',
    position: 'relative',
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
    maxHeight: '100%',
    boxShadow: styles.depthShadows[0]
  },
  clickAway: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer',
  }
};
