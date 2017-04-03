import colors from '../settings/colors';
import styles from '../settings/styles';

const styleSheet = {
  badge: {
    backgroundColor: colors.theme,
    boxShadow: styles.depthShadows[0],
    color: colors.white,
    fontSize: '10px',
    lineHeight: '10px',
    padding: '3px',
    textAlign: 'center',
    borderRadius: '3px'
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white
  }
};

export default styleSheet;
