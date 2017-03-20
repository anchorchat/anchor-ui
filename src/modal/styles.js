import colors from '../settings/colors';
import fade from '../internal/fade';

export default {
  root: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    background: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    overflow: 'hidden'
  },
  content: {
    padding: '10px',
    color: colors.primaryText
  },
  footer: {
    padding: '12px 16px',
    background: colors.theme,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: fade(colors.black, 0.5),
    zIndex: '2'
  }
};
