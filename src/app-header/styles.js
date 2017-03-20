import colors from '../settings/colors';

const styleSheet = {
  root: {
    background: colors.theme,
    boxShadow: `${colors.boxShadow} 0px 1px 6px, ${colors.boxShadow} 0px 1px 4px`,
    boxSizing: 'border-box',
    height: '56px',
    paddingTop: '10px',
    paddingRight: '16px',
    paddingBottom: '10px',
    paddingLeft: '16px',
    position: 'relative',
    width: '100%',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    color: colors.white,
    fontSize: '24px',
    fontWeight: 'normal',
    lineHeight: '36px',
    margin: 0,
    textDecoration: 'none'
  },
  leftButton: {
    position: 'absolute',
    left: '8px'
  },
  rightButton: {
    position: 'absolute',
    right: '8px'
  },
  icon: {
    height: '100%',
    marginRight: '16px'
  }
};

export default styleSheet;
