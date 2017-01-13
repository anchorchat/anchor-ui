import colors from './colors';
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
    cursor: 'pointer',
    listStyle: 'none',
    padding: '10px',
    position: 'relative',
    transition: 'background-color .3s ease-in-out',
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  },
  active: {
    backgroundColor: colors.theme,
    color: colors.white,
    '&:hover': {
      backgroundColor: darken(colors.theme, 0.05)
    },
    '&:active': {
      backgroundColor: darken(colors.theme, 0.15)
    },
    '& $primaryText': {
      color: colors.white
    },
    '& $secondaryText': {
      color: colors.white
    }
  },
  primaryText: {
    color: colors.primaryText,
    fontSize: '16px',
    margin: 0,
    lineHeight: '16px'
  },
  secondaryText: {
    color: colors.secondaryText,
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0,
    marginTop: '2.4px',
    lineHeight: '14px'
  }
};

export default styleSheet;
