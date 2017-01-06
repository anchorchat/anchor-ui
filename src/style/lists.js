import colors from './colors';
import darken from '../internal/darken';

const style = {
  list: {
    'padding-left': '0',
    margin: '0',
    boxSizing: 'border-box',
    background: colors.white
  },
  listItem: {
    listStyle: 'none',
    padding: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'background-color .3s ease-in-out',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    '&:active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  },
  primaryText: {
    margin: 0,
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 'normal'
  },
  secondaryText: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '14px',
    fontWeight: 'normal',
    marginTop: '2.4px'
  }
};

export default style;
