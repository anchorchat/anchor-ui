import colors from '../settings/colors';

const styleSheet = {
  root: {
    background: colors.white,
    borderBottom: `1px solid ${colors.grey}`,
    position: 'relative',
    padding: '0 48px',
    boxSizing: 'border-box'
  },
  text: {
    color: colors.primaryText,
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
    lineHeight: '48px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  rightButton: {
    position: 'absolute',
    right: '4px',
    top: '4px'
  },
  leftButton: {
    position: 'absolute',
    left: '4px',
    top: '4px'
  }
};

export default styleSheet;
