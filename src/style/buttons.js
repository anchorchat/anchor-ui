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
    '&:hover': {
      backgroundColor: fade(colors.black, 0.9)
    },
    '&:active': {
      backgroundColor: fade(colors.black, 0.8)
    }
  },
  button: {
    backgroundColor: colors.theme,
    background: 'none',
    borderRadius: '5px',
    border: 0,
    color: colors.white,
    cursor: 'pointer',
    fontSize: '16px',
    outline: 0,
    padding: '12px 16px',
    transition: 'background-color .3s ease-in-out',
    '&:hover': {
      backgroundColor: darken(colors.theme, 0.15)
    },
    '&:active': {
      backgroundColor: darken(colors.theme, 0.25)
    },
    '&>*': {
      margin: '0'
    }
  }
};

export default styleSheet;
