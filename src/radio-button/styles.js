import colors from '../settings/colors';

export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
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
    color: 'inherit',
    transition: 'all .3s ease-in-out',
    lineHeight: '24px',
    borderBottom: '2px solid transparent'
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px'
  }
};
