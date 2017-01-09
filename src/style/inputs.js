import colors from './colors';

const styleSheet = {
  input: {
    position: 'relative',
    padding: '16px',
    paddingTop: '0',
    background: colors.background
  },
  messageInput: {
    appearance: 'none',
    border: '0',
    width: '100%',
    height: '48px',
    paddingLeft: '10px',
    boxSizing: 'border-box',
    fontSize: '16px',
    color: colors.primaryText,
    '&:focus': {
      outline: 'none'
    }
  }
};

export default styleSheet;
