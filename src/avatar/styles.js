import colors from '../settings/colors';

export default {
  root: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    backgroundColor: colors.background,
    position: 'relative',
    backgroundImage: 'url()'
  },
  status: {
    width: '8px',
    height: '8px',
    border: `1px solid ${colors.white}`,
    backgroundColor: colors.offline,
    borderRadius: '50%',
    position: 'absolute',
    right: 0,
    top: 0
  }
};
