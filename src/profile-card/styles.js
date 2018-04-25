import colors from '../settings/colors';

export default {
  profileCard: {
    backgroundColor: colors.theme,
    color: colors.white,
    fontSize: '18px',
    fontWeight: 'bolder',
    lineHeight: '20px',
    padding: '15px'
  },
  withAvatar: {
    lineHeight: '40px',
    overflow: 'auto'
  },
  username: {
    margin: '0',
    maxWidth: 'calc(100% - 101px)',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline-block',
    color: colors.white,
    fontWeight: 'inherit'
  },
  text: {
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: '0',
    wordBreak: 'break-word',
    marginTop: '4px'
  },
  avatar: {
    float: 'left',
    width: '80px',
    height: '80px',
    border: `3px solid ${colors.white}`,
    marginRight: '15px'
  }
};
