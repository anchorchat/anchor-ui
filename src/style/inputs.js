import { colors } from '../settings';

const styleSheet = {
  inputWrapper: {
    maxWidth: '250px',
    width: '100%',
  },
  input: {
    appearance: 'none',
    backgroundColor: colors.inputs,
    border: '0',
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: colors.white,
    fontSize: '16px',
    lineHeight: '16px',
    padding: '6.5px',
    width: '100%',
    '&:focus': {
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
  }
};

export default styleSheet;
