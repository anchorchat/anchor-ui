import colors from '../settings/colors';

export default {
  root: {
    borderRadius: 0,
    borderTop: 0,
    borderRight: 0,
    borderBottom: '3px solid transparent',
    borderLeft: 0,
    background: colors.white,
    outline: 0,
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '10px',
    transition: 'all .3s ease-in-out',
    opacity: '0.5',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: '50px',
    position: 'relative'
  },
  label: {
    color: colors.primaryText,
    textTransform: 'capitalize',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '10px'
  },
  badge: {
    position: 'absolute',
    right: '3px',
    top: '3px'
  }
};
