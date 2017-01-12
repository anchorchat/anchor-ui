import colors from './colors';

const styleSheet = {
  input: {
    background: colors.background,
    padding: '16px',
    paddingTop: '0',
    position: 'relative'
  },
  messageInput: {
    appearance: 'none',
    border: '0',
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: colors.primaryText,
    fontSize: '16px',
    height: '48px',
    paddingLeft: '10px',
    paddingRight: '48px',
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  }
};

export default styleSheet;
