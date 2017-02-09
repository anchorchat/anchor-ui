import colors from './colors';
import darken from '../internal/darken';
import fade from '../internal/fade';

const styleSheet = {
  iconButton: {
    background: 'none',
    borderRadius: '50%',
    border: 0,
    cursor: 'pointer',
    height: '40px',
    outline: 0,
    padding: '8px',
    transition: 'background-color .3s ease-in-out',
    width: '40px',
    ':hover': {
      backgroundColor: fade(colors.black, 0.9)
    },
    ':active': {
      backgroundColor: fade(colors.black, 0.8)
    }
  },
  button: {
    backgroundColor: colors.theme,
    border: 0,
    borderRadius: '3px',
    boxShadow: `0 2px 2px 0 ${colors.boxShadow}`,
    color: colors.white,
    cursor: 'pointer',
    fontSize: '16px',
    outline: 0,
    padding: '6.5px 13px',
    transition: 'background-color .3s ease-in-out',
    ':hover': {
      backgroundColor: darken(colors.theme, 0.15)
    },
    ':active': {
      backgroundColor: darken(colors.theme, 0.25)
    }
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white,
    ':hover': {
      backgroundColor: darken(colors.white, 0.15)
    },
    ':active': {
      backgroundColor: darken(colors.white, 0.25)
    }
  }
};

export default styleSheet;
