export default {
  lightbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    borderRadius: '3px',
    padding: '40px 30px',
    boxSizing: 'border-box',
    position: 'relative',
    pointerEvents: 'none'
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    zIndex: 1
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    pointerEvents: 'all'
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
