import colors from '../settings/colors';

export default {
  root: {
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
    color: colors.secondaryText,
    transition: 'all .3s ease-in-out',
    lineHeight: '24px',
    fontSize: '16px',
    fontWeight: 'bolder',
    borderBottom: '2px solid transparent'
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px'
  },
  unchecked: {
    width: '18px',
    height: '18px',
    border: `2px solid ${colors.icons}`,
    boxSizing: 'border-box',
    borderRadius: '2px',
    margin: '3px'
  }
};
