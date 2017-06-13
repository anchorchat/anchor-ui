import colors from '../settings/colors';
import styles from '../settings/styles';

const styleSheet = {
  root: {
    backgroundColor: colors.theme,
    boxShadow: styles.depthShadows[0],
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
    alignItems: 'center',
    transition: 'background .3s ease-in-out'
  },
  text: {
    color: colors.white,
    fontSize: '24px',
    fontWeight: 'inherit',
    lineHeight: '36px',
    margin: 0,
    textDecoration: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
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
