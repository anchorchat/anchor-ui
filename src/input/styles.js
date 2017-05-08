import colors from '../settings/colors';

export default {
  root: {
    maxWidth: '250px',
    width: '100%',
  },
  input: {
    appearance: 'none',
    backgroundColor: 'rgba(45, 55, 104, 0.75)',
    border: '0',
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: colors.white,
    fontSize: '16px',
    lineHeight: '16px',
    padding: '6.5px',
    width: '100%',
    outline: 'none',
    ':focus': {
      outline: 'none'
    }
  },
  label: {
    boxSizing: 'border-box',
    color: colors.primaryText,
    display: 'block',
    paddingBottom: '8px',
    paddingLeft: '8px',
    textTransform: 'capitalize',
    width: '100%'
  },
  disabled: {
    opacity: '0.38'
  },
  error: {
    display: 'block',
    paddingTop: '6px',
    paddingLeft: '8px',
    color: colors.error,
    fontSize: '14px'
  }
};
