import colors from './colors';

const styleSheet = {
  header: {
    background: colors.green,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
    boxSizing: 'border-box',
    height: '56px',
    padding: '10px 16px',
    position: 'relative',
    width: '100%',
    zIndex: '1'
  },
  text: {
    color: colors.white,
    fontSize: '24px',
    lineHeight: '36px',
    margin: 0,
    textDecoration: 'none',
    '& *': {
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      textDecoration: 'inherit'
    }
  }
};

export default styleSheet;
