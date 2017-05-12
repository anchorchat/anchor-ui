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
  arrow: {
    borderBottom: '5px solid transparent',
    borderRight: `10px solid ${colors.white}`,
    borderTop: '5px solid transparent',
    height: '0',
    left: '-10px',
    position: 'absolute',
    top: '15px'
  },
  myArrow: {
    borderRight: '10px solid',
    borderRightColor: 'inherit',
    left: 'initial',
    right: '-10px',
    transform: 'rotate(180deg)'
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
  messageHeader: {
    color: colors.secondaryText,
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '18px',
    marginBottom: '5px',
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
