import colors from '../settings/colors';

export default {
  root: {
    backgroundColor: colors.white,
    boxSizing: 'border-box',
    margin: '0',
    paddingLeft: '0'
  },
  listHeader: {
    padding: '8px 8px 8px 16px',
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bolder',
    color: colors.secondaryText
  },
  list: {
    height: '100%',
    paddingLeft: '0',
    overflowY: 'scroll',
    margin: '0'
  },
  virtualizedList: {
    outline: 'none'
  }
};
