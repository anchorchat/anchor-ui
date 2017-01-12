import colors from './colors';

const styleSheet = {
  message: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    clear: 'both',
    color: colors.primaryText,
    float: 'left',
    marginBottom: '34px',
    marginLeft: '16px',
    maxWidth: '75%',
    padding: '12px',
    position: 'relative',
    '&:before': {
      borderBottom: '5px solid transparent',
      borderRight: `10px solid ${colors.white}`,
      borderTop: '5px solid transparent',
      content: '""',
      height: '0',
      left: '-10px',
      position: 'absolute',
      top: '15px'
    },
    '&:last-of-type': {
      marginBottom: '17px'
    }
  },
  avatar: {
    marginLeft: '66px'
  },
  myMessage: {
    backgroundColor: colors.green,
    color: 'white',
    float: 'right',
    marginLeft: '0',
    marginRight: '16px',
    '& $messageBody': {
      color: colors.white
    },
    '& $messageHeader': {
      color: colors.white,
      textAlign: 'right'
    },
    '& $messageTime': {
      color: colors.secondaryText,
      left: '0',
      right: 'initial'
    },
    '&$avatar': {
      marginLeft: '0',
      marginRight: '66px'
    },
    '&:before': {
      borderRight: `10px solid ${colors.green}`,
      left: 'initial',
      right: '-10px',
      transform: 'rotate(180deg)'
    }
  },
  messageHeader: {
    color: colors.secondaryText,
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '14px',
    marginBottom: '5px',
  },
  messageBody: {
    color: colors.primaryText,
    fontSize: '16px',
    lineHeight: '18px',
    margin: '0'
  },
  messageTime: {
    bottom: '-17px',
    color: colors.secondaryText,
    fontSize: '12px',
    lineHeight: '12px',
    position: 'absolute',
    right: '0'
  }
};

export default styleSheet;
