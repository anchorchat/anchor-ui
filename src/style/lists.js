import { colors } from '../settings';
import darken from '../internal/darken';

const styleSheet = {
  list: {
    background: colors.white,
    boxSizing: 'border-box',
    margin: '0',
    paddingLeft: '0',
  },
  listItem: {
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    borderTop: `1px solid ${colors.white}`,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '54px',
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
  mutedIcon: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '40px',
    height: '40px',
    padding: '8px',
    boxSizing: 'border-box',
    backgroundColor: colors.black,
    borderRadius: '50%',
    opacity: '.75'
  },
  rightButton: {
    paddingRight: '52px'
  },
  button: {
    position: 'absolute',
    right: '6px',
    top: '6px'
  },
  primaryText: {
    color: colors.primaryText,
    fontSize: '16px',
    margin: 0,
    lineHeight: '16px',
    userSelect: 'none'
  },
  secondaryText: {
    color: colors.secondaryText,
    fontSize: '14px',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: '2.4px',
    lineHeight: '14px',
    userSelect: 'none'
  },
  leftAvatar: {
    paddingLeft: '56px'
  },
  avatar: {
    position: 'absolute',
    left: '8px',
    top: '6px'
  },
  badge: {
    position: 'absolute',
    right: '-3px',
    top: '-3px'
  }
};

export default styleSheet;
