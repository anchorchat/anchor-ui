import colors from '../settings/colors';

export default {
  root: {
    borderRadius: 0,
    borderTop: 0,
    borderRight: 0,
    borderBottom: '3px solid transparent',
    borderLeft: 0,
    backgroundColor: colors.white,
    outline: 0,
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '10px',
    transition: 'opacity .3s ease-in-out, border .3s ease-in-out',
    opacity: '0.5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    flexGrow: 'none',
    justifyContent: 'center',
    height: '60px',
    position: 'relative'
  },
  label: {
    color: colors.secondaryText,
    textTransform: 'capitalize',
    fontSize: '12px',
    fontWeight: 'bolder'
  },
  icon: {
    width: '24px',
    height: '24px'
  },
  badge: {
    position: 'absolute',
    right: '20px',
    top: '5px'
  }
};
