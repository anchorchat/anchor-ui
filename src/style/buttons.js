import colors from './colors';
import darken from '../internal/darken';

const style = {
  button: {
    width: '40px',
    height: '40px',
    padding: '8px',
    outline: 0,
    background: 'none',
    border: 0,
    borderRadius: '50%',
    transition: 'background-color .3s ease-in-out',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  }
};

export default style;
