import colors from '../settings/colors';

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer'
  },
  input: {
    display: 'none'
  },
  label: {
    color: colors.primaryText,
    lineHeight: '24px'
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px'
  }
};
