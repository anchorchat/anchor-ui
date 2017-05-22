import colors from '../settings/colors';

export default {
  root: {
    height: '48px',
    width: '100%',
    position: 'relative'
  },
  input: {
    appearance: 'none',
    border: '0',
    boxSizing: 'border-box',
    color: colors.icons,
    backgroundColor: colors.background,
    fontSize: '16px',
    lineHeight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '40px',
    paddingRight: '8px',
    width: '100%',
    height: '100%',
    ':focus': {
      outline: 'none'
    }
  },
  icon: {
    position: 'absolute',
    top: '12px',
    left: '8px'
  }
};
