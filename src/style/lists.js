import colors from './colors';

const style = {
  list: {
    'padding-left': '0',
    margin: '0'
  },
  listItem: {
    'list-style': 'none',
    padding: '10px',
    'box-sizing': 'border-box',
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
    'font-size': '16px',
    'line-height': '16px',
    'font-weight': 'normal'
  },
  secondaryText: {
    margin: 0,
    'font-size': '14px',
    'line-height': '14px',
    'font-weight': 'normal',
    'margin-top': '2.4px'
  }
};

export default style;
