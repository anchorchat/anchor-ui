import colors from '../settings/colors';

export default {
  message: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: colors.primaryText,
    marginLeft: '16px',
    maxWidth: '80%',
    padding: '12px',
    position: 'relative',
    wordBreak: 'break-word',
    fontWeight: 'inherit'
  },
  avatar: {
    marginLeft: '48px'
  },
  myAvatar: {
    marginLeft: '0',
    marginRight: '48px'
  },
  myMessage: {
    backgroundColor: colors.theme,
    color: colors.white,
    marginLeft: '0',
    marginRight: '16px',
  },
  body: {
    color: colors.primaryText,
    fontSize: '16px',
    lineHeight: '22px',
    margin: '0'
  },
  compact: {
    marginLeft: '0',
    marginRight: '0',
    maxWidth: '100%',
    display: 'flex'
  },
  iconMenu: {
    position: 'absolute',
    top: '3px',
    right: '0'
  }
};
