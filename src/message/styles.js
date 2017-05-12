import colors from '../settings/colors';

export default {
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px'
  },
  myContainer: {
    flexDirection: 'row-reverse'
  },
  message: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: colors.primaryText,
    marginLeft: '16px',
    maxWidth: '75%',
    padding: '12px',
    position: 'relative',
    wordBreak: 'break-word'
  },
  avatar: {
    marginLeft: '66px'
  },
  myMessage: {
    backgroundColor: colors.theme,
    color: colors.white,
    marginLeft: '0',
    marginRight: '16px',
  },
  messageBody: {
    display: 'flex',
    color: colors.primaryText,
    fontSize: '16px',
    lineHeight: '18px',
    margin: '0'
  },
  messageImage: {
    borderRadius: '3px',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '200px',
  },
  messageSticker: {
    width: 'auto',
    height: '120px'
  }
};
