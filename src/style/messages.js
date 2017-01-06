import colors from './colors';

const style = {
  message: {
    maxWidth: '75%',
    padding: '7.5px',
    boxSizing: 'border-box',
    backgroundColor: colors.white,
    borderRadius: '3px',
    color: colors.primaryText,
    position: 'relative',
    marginBottom: '34px',
    float: 'left',
    clear: 'both',
    '&:last-of-type': {
      marginBottom: '17px'
    }
  },
  myMessage: {
    float: 'right',
    backgroundColor: colors.green,
    color: 'white',
    '& $messageHeader': {
      textAlign: 'right',
      color: colors.white
    },
    '& $messageTime': {
      color: colors.primaryText,
      right: 'initial',
      left: '0'
    }
  },
  messageHeader: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '14px',
    marginBottom: '5px',
    color: colors.secondaryText
  },
  messageBody: {
    margin: '0',
    fontSize: '16px',
    lineHeight: '18px'
  },
  messageTime: {
    fontSize: '12px',
    lineHeight: '12px',
    position: 'absolute',
    bottom: '-17px',
    right: '0'
  }
};

export default style;
