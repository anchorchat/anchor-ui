import colors from './colors';
import darken from '../internal/darken';

const styleSheet = {
  button: {
    backgroundColor: colors.white,
    background: 'none',
    borderRadius: '50%',
    border: 0,
    height: '40px',
    outline: 0,
    padding: '8px',
    transition: 'background-color .3s ease-in-out',
    width: '40px',
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    },
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    }
  }
};

export default styleSheet;
