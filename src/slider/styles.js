import colors from '../settings/colors';

export default {
  root: {
    width: '100%',
    maxWidth: '250px'
  },
  sliderRoot: {
    height: '18px',
    width: '100%',
    position: 'relative'
  },
  slider: {
    position: 'absolute',
    top: '8px',
    left: '0px',
    width: '100%',
    height: '2px'
  },
  filled: {
    backgroundColor: colors.theme,
    height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  remaining: {
    backgroundColor: colors.grey,
    height: '100%',
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0
  },
  button: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: `2px solid ${colors.grey}`,
    top: '1px',
    left: '0%',
    backgroundColor: colors.white,
    transform: 'translate(-50%, -50%)',
    transition: 'border .1s ease-in-out, background-color .1s ease-in-out',
    cursor: 'pointer'
  },
  input: {
    position: 'absolute',
    margin: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer'
  },
  label: {
    fontSize: '16px',
    color: colors.secondaryText,
    fontWeight: 'bolder',
    marginBottom: '10px',
    display: 'inline-block'
  },
  error: {
    display: 'block',
    paddingTop: '6px',
    paddingLeft: '8px',
    color: colors.error,
    fontSize: '14px'
  },
  disabled: {
    opacity: '0.38'
  }
};
