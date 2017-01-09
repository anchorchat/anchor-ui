import colors from './colors';

const styleSheet = {
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
    marginLeft: '10px',
    '&:last-of-type': {
      marginBottom: '17px'
    },
    '&:before': {
      content: '""',
      width: '0',
      height: '0',
      borderTop: '5px solid transparent',
      borderRight: `10px solid ${colors.white}`,
      borderBottom: '5px solid transparent',
      position: 'absolute',
      top: '15px',
      left: '-10px'
    }
  },
  avatar: {
    marginLeft: '60px'
  },
  myMessage: {
    float: 'right',
    backgroundColor: colors.green,
    color: 'white',
    marginRight: '10px',
    marginLeft: '0',
    '& $messageHeader': {
      textAlign: 'right',
      color: colors.white
    },
    '& $messageTime': {
      color: colors.primaryText,
      right: 'initial',
      left: '0'
    },
    '&$avatar': {
      marginLeft: '0',
      marginRight: '60px'
    },
    '&:before': {
      left: 'initial',
      right: '-10px',
      transform: 'rotate(180deg)',
      borderRight: `10px solid ${colors.green}`,
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

export default styleSheet;
