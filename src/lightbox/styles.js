import colors from '../settings/colors';
import fade from '../internal/fade';

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
    boxSizing: 'border-box',
    position: 'relative',
    pointerEvents: 'none'
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    zIndex: 1
  },
  image: {
    maxWidth: '80%',
    maxHeight: '80%',
    pointerEvents: 'all'
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
    fontWeight: 'bold',
    lineHeight: '20px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: fade(colors.black, 0.5),
    textAlign: 'center',
    pointerEvents: 'all'
  },
};
