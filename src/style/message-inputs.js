import colors from './colors';

const styleSheet = {
  input: {
    paddingBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
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
    ':focus': {
      outline: 'none'
    },
    ':disabled': {
      opacity: '0.38'
    }
  },
  disabled: {
    opacity: '0.38'
  },
  leftButton: {
    paddingLeft: '48px'
  },
  button: {
    left: '20px',
    position: 'absolute',
    top: '4px'
  },
  rightButton: {
    position: 'absolute',
    right: '20px',
    top: '4px'
  }
};

export default styleSheet;
