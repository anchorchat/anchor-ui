import colors from '../settings/colors';

export default {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4px 8px',
    cursor: 'pointer',
    color: colors.primaryText,
    ':hover': {
      color: colors.theme
    }
  },
  input: {
    opacity: 0,
    zIndex: -999,
    position: 'absolute'
  },
  label: {
    transition: 'all .3s ease-in-out',
    lineHeight: '24px',
    borderBottom: '2px solid transparent',
    fontSize: '16px',
    color: colors.secondaryText,
    fontWeight: 'bolder',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '8px'
  }
};
