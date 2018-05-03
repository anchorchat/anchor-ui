import colors from '../settings/colors';

export default {
  root: {
    height: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: colors.primaryText,
    overflow: 'hidden',
    position: 'relative'
  },
  cover: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    marginBottom: '76px'
  },
  coverImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: colors.theme,
    width: '100%',
    height: '100%',
    filter: 'blur(4px) brightness(80%)'
  },
  avatar: {
    width: '152px',
    height: '152px',
    boxSizing: 'border-box',
    margin: '0 auto',
    border: `2px solid ${colors.white}`,
    position: 'absolute',
    top: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  header: {
    fontSize: '20px',
    fontWeight: 'bolder',
    marginTop: '16px',
    marginBottom: '8px',
    color: colors.secondaryText,
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  secondaryText: {
    fontSize: '16px',
    lineHeight: '18px',
    marginTop: 0,
    marginBottom: '16px',
    color: colors.primaryText,
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'inherit',
    whiteSpace: 'nowrap'
  },
  status: {
    width: '16px',
    height: '16px',
    boxSizing: 'border-box',
    border: `1px solid ${colors.white}`,
    top: '12px',
    right: '12px'
  }
};
