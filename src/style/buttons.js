import colors from './colors';

const style = {
  button: {
    width: '48px',
    height: '48px',
    padding: '12px',
    outline: 0,
    background: 'none',
    border: 0,
    borderRadius: '50%',
    transition: 'background-color .3s ease-in-out',
    '&:hover': {
      backgroundColor: colors.lightGrey
    },
    '&:active': {
      backgroundColor: colors.grey
    }
  }
};

export default style;
