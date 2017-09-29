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
    wordBreak: 'break-word'
  },
  avatar: {
    marginLeft: '48px'
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
    margin: '0',
    flexDirection: 'column'
  },
  giphy: {
    borderRadius: '3px',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'cover'
  },
  giphyDescription: {
    marginBottom: '8px'
  },
  compact: {
    marginLeft: '0',
    marginRight: '0',
    maxWidth: '100%',
    display: 'flex'
  }
};
