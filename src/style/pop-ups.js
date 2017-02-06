import colors from './colors';
import fade from '../internal/fade';

const styleSheet = {
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
  },
  popUp: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    backgroundColor: colors.theme,
    borderRadius: '3px',
    padding: '50px 30px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  headerText: {
    color: colors.white,
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0',
    marginBottom: '12.5px'
  },
  image: {
    marginTop: '25px'
  },
  bodyText: {
    textAlign: 'center',
    margin: '0',
    fontSize: '12px',
    color: colors.white
  },
  button: {
    marginBottom: '25px'
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

export default styleSheet;
