import colors from '../settings/colors';
import styles from '../settings/styles';

const styleSheet = {
  badge: {
    backgroundColor: colors.theme,
    borderRadius: '50%',
    boxSizing: 'border-box',
    boxShadow: styles.depthShadows[0],
    color: colors.white,
    display: 'block',
    fontSize: '12px',
    height: '20px',
    lineHeight: '16px',
    padding: '3px',
    textAlign: 'center',
    width: '20px',
    transition: 'background .3s ease-in-out'
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white
  }
};

export default styleSheet;
