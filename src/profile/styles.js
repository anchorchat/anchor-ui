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
    marginBottom: '78px'
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
    width: '150px',
    height: '150px',
    margin: '0 auto',
    border: `3px solid ${colors.white}`,
    position: 'absolute',
    top: '200px',
    transform: 'translateY(-50%)'
  },
  close: {
    position: 'absolute',
    top: '16px',
    right: '32px'
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bolder',
    marginTop: '16px',
    marginBottom: '8px',
    color: colors.secondaryText,
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minHeight: '22px',
    whiteSpace: 'nowrap'
  },
  secondaryText: {
    fontSize: '16px',
    marginTop: 0,
    marginBottom: '16px',
    color: colors.primaryText,
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minHeight: '20px',
    fontWeight: 'inherit',
    whiteSpace: 'nowrap'
  },
  status: {
    width: '15px',
    height: '15px',
    border: `2px solid ${colors.white}`,
    top: '10px',
    right: '10px'
  }
};
