import colors from '../settings/colors';
import darken from '../internal/darken';

export default {
  listItem: {
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    borderTop: `1px solid ${colors.white}`,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '64px',
    listStyle: 'none',
    paddingTop: '10px',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingBottom: '10px',
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
    borderRadius: '50%'
  },
  rightButton: {
    paddingRight: '52px'
  },
  button: {
    position: 'absolute',
    right: '6px',
    top: '12px',
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
    lineHeight: '22px',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  leftAvatar: {
    paddingLeft: '56px'
  },
  avatar: {
    position: 'absolute',
    left: '8px',
    top: '12px'
  },
  badge: {
    position: 'absolute',
    right: '-3px',
    top: '-3px'
  }
};
