import colors from '../settings/colors';
import fade from '../internal/fade';

export default {
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
  modal: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    background: colors.theme,
    borderRadius: '3px',
    padding: '30px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  dialog: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    background: colors.white,
    borderRadius: '3px',
    padding: '24px 16px',
    boxSizing: 'border-box',
    position: 'relative'
  },
  dialogHeading: {
    margin: '0 0 16px 0',
    color: colors.primaryText,
    fontWeight: 'bold'
  },
  modalHeading: {
    color: colors.white,
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '0',
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '12.5px'
  },
  image: {
    marginTop: '25px'
  },
  bodyText: {
    textAlign: 'center',
    marginTop: '0',
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '0',
    fontSize: '14px',
    color: colors.white
  },
  button: {
    marginBottom: '25px'
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px'
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
