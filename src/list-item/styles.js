import colors from '../settings/colors';
import darken from '../internal/darken';

export default {
  root: {
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    borderTop: `1px solid ${colors.white}`,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '48px',
    listStyle: 'none',
    paddingTop: '0',
    paddingRight: '8px',
    paddingLeft: '8px',
    paddingBottom: '0',
    position: 'relative',
    transition: 'background-color .3s ease-in-out',
    ':hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  },
  active: {
    backgroundColor: colors.theme,
    color: colors.white,
    ':hover': {
      backgroundColor: darken(colors.theme, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.theme, 0.15)
    }
  },
  icon: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '40px',
    height: '40px',
    padding: '8px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(21, 21, 21, .75)',
    borderRadius: '50%',
    zIndex: 1
  },
  rightButton: {
    paddingRight: '52px'
  },
  button: {
    position: 'absolute',
    right: '8px',
    transition: 'transform .3s ease-in-out'
  },
  primaryText: {
    color: colors.primaryText,
    fontSize: '16px',
    margin: 0,
    lineHeight: '18px',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  secondaryText: {
    color: colors.primaryText,
    fontSize: '14px',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: '2.4px',
    lineHeight: '16px',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  leftAvatar: {
    paddingLeft: '56px'
  },
  avatar: {
    position: 'absolute',
    left: '8px'
  },
  badge: {
    position: 'absolute',
    right: '-3px',
    top: '-3px',
    zIndex: 1
  },
  container: {
    width: '100%'
  }
};
