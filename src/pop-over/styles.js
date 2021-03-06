import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    position: 'absolute',
    top: '100%',
    right: '50%',
    minWidth: '200px',
    backgroundColor: colors.white,
    borderRadius: '4px',
    boxShadow: styles.depthShadows[0],
    margin: 0,
    paddingLeft: 0,
    overflow: 'auto',
    zIndex: 9001,
    maxWidth: '85%'
  },
  header: {
    padding: '8px 8px 8px 16px',
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bolder',
    color: colors.secondaryText,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};
