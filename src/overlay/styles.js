import colors from '../settings/colors';
import fade from '../internal/fade';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: fade(colors.black, 0.15),
    zIndex: '2'
  }
};
