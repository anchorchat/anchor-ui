import colors from './colors';

const style = {
  messageInput: {
    appearance: 'none',
    border: '0',
    width: '100%',
    height: '48px',
    paddingLeft: '10px',
    boxSizing: 'border-box',
    fontSize: '16px',
    '&:focus': {
      outline: 'none'
    },
    color: colors.primaryText
  }
};

export default style;
