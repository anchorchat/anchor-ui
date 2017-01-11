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
    transition: 'background-color .3s ease-in-out',
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    },
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    }
  },
  active: {
    backgroundColor: colors.green,
    color: colors.white,
    '&:active': {
      backgroundColor: darken(colors.green, 0.15)
    },
    '&:hover': {
      backgroundColor: darken(colors.green, 0.05)
    }
  },
  primaryText: {
    fontSize: '16px',
    fontWeight: 'normal',
    margin: 0,
    lineHeight: '16px'
  },
  secondaryText: {
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0,
    marginTop: '2.4px',
    lineHeight: '14px'
  }
};

export default styleSheet;
