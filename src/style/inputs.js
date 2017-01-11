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
    boxSizing: 'border-box',
    color: colors.primaryText,
    fontSize: '16px',
    height: '48px',
    paddingLeft: '10px',
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  }
};

export default styleSheet;
