import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    backgroundColor: colors.white,
    borderRadius: '4px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    boxShadow: styles.depthShadows[0]
  },
  content: {
    padding: '24px 16px',
    color: colors.primaryText
  },
  footer: {
    padding: '16px',
    backgroundColor: colors.theme,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.white,
    textTransform: 'uppercase'
  },
  header: {
    color: colors.secondaryText,
    fontSize: '24px',
    fontWeight: 'bolder',
    marginTop: '0',
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '16px'
  }
};
