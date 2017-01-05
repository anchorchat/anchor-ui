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
    marginBottom: '30px',
    float: 'left'
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
      color: colors.primaryText
    }
  },
  messageHeader: {
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '12px',
    marginBottom: '5px',
    color: colors.secondaryText
  },
  messageBody: {
    margin: '0',
    fontSize: '14px',
    lineHeight: '16px'
  },
  messageTime: {
    fontSize: '10px',
    lineHeight: '10px',
    position: 'absolute',
    bottom: '-15px',
    right: '7.5px'
  }
};

export default style;
