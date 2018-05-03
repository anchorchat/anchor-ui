import colors from '../settings/colors';

export default {
  profileCard: {
    backgroundColor: colors.theme,
    color: colors.white,
    fontSize: '20px',
    fontWeight: 'bolder',
    lineHeight: '20px',
    padding: '16px'
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
  avatar: {
    float: 'left',
    width: '80px',
    height: '80px',
    border: `2px solid ${colors.white}`,
    marginRight: '15px',
    boxSizing: 'border-box'
  }
};
