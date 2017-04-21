import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    background: colors.white,
    borderRadius: '3px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    boxShadow: styles.depthShadows[0]
  },
  content: {
    padding: '24px 16px',
    color: colors.primaryText
  },
  footer: {
    padding: '12px 16px',
    background: colors.theme,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
};
