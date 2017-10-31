import colors from '../settings/colors';

export default {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  label: {
    fontSize: '16px',
    color: colors.secondaryText,
    fontWeight: 'bolder',
    padding: '0 0 8px 8px',
    display: 'inline-block'
  },
  error: {
    display: 'block',
    paddingLeft: '10px',
    color: colors.error,
    fontSize: '14px'
  }
};
