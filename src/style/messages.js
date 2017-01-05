import colors from './colors';

const style = {
  message: {
    maxWidth: '75%',
    padding: '7.5px',
    boxSizing: 'border-box',
    backgroundColor: colors.green,
    borderRadius: '3px',
    color: colors.white,
    position: 'relative',
    marginBottom: '30px',
    float: 'left'
  },
  messageHeader: {
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '12px',
    marginBottom: '5px'
  },
  messageBody: {
    margin: '0',
    fontSize: '14px',
    lineHeight: '14px'
  },
  messageTime: {
    fontSize: '10px',
    lineHeight: '10px',
    position: 'absolute',
    bottom: '-15px',
    right: '7.5px',
    color: colors.grey
  }
};

export default style;
