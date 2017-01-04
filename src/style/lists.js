import colors from './colors';

const style = {
  list: {
    'padding-left': '0',
    margin: '0'
  },
  listItem: {
    listStyle: 'none',
    padding: '10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.lightGrey
    },
    '&:active': {
      backgroundColor: colors.grey
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
