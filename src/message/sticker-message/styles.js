import colors from '../../settings/colors';

export default {
  container: {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    clear: 'both',
  },
  message: {
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    marginLeft: '16px',
    padding: '12px',
    position: 'relative',
    display: 'flex',
    alignSelf: 'flex-start'
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
    marginLeft: '0',
    marginRight: '16px',
  },
  body: {
    width: 'auto',
    height: 'auto',
    maxWidth: '152px',
    maxHeight: '152px',
    marginLeft: '16px',
    float: 'left',
    marginTop: '5px'
  },
  compact: {
    marginLeft: '0',
    marginRight: '0',
    maxWidth: '100%',
    display: 'flex',
    alignSelf: 'flex-start'
  },
  iconMenu: {
    position: 'absolute',
    top: '3px',
    right: '0'
  }
};
