import colors from '../../settings/colors';

export default {
  message: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: colors.primaryText,
    marginLeft: '16px',
    maxWidth: '75%',
    padding: '12px',
    position: 'relative',
    wordBreak: 'break-word',
    fontWeight: 'inherit'
  },
  avatar: {
    marginLeft: '66px'
  },
  myAvatar: {
    marginLeft: '0',
    marginRight: '66px'
  },
  myMessage: {
    backgroundColor: colors.theme,
    color: colors.white,
    marginLeft: '0',
    marginRight: '16px',
  },
  body: {
    display: 'flex',
    color: colors.primaryText,
    fontSize: '16px',
    lineHeight: '18px',
    margin: '0'
  },
  compact: {
    marginLeft: '0',
    marginRight: '0',
    maxWidth: 'calc(100% - 40px)',
    display: 'flex'
  },
  loaderDot: {
    width: '8px',
    height: '8px',
    margin: '0 2.5px'
  }
};
