import colors from '../../settings/colors';

export default {
  message: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    marginLeft: '16px',
    maxWidth: '75%',
    padding: '12px',
    position: 'relative'
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
    marginLeft: '0',
    marginRight: '16px',
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
  },
  compact: {
    marginLeft: '0',
    marginRight: '0',
    maxWidth: '100%',
    display: 'flex'
  }
};
