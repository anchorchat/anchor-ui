import colors from '../settings/colors';

export default {
  root: {
    maxWidth: '250px',
    width: '100%',
  },
  input: {
    appearance: 'none',
    backgroundColor: colors.inputs,
    border: '0',
    borderRadius: '3px',
    height: '32px',
    boxSizing: 'border-box',
    color: colors.primaryText,
    fontSize: '16px',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    lineHeight: '16px',
    padding: '6.5px',
    width: '100%',
    outline: 'none',
    ':focus': {
      outline: 'none'
    }
  },
  textarea: {
    resize: 'none',
    overflow: 'auto'
  },
  label: {
    fontSize: '16px',
    color: colors.secondaryText,
    fontWeight: 'bolder',
    boxSizing: 'border-box',
    display: 'block',
    paddingBottom: '8px',
    paddingLeft: '8px',
    textTransform: 'capitalize',
    width: '100%'
  },
  disabled: {
    opacity: '0.5'
  },
  error: {
    display: 'block',
    paddingTop: '6px',
    paddingLeft: '8px',
    color: colors.error,
    fontSize: '14px'
  }
};
