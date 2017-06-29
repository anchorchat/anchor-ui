import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    borderRadius: '3px',
    backgroundColor: colors.white,
    overflow: 'hidden',
    width: '100%',
    maxHeight: '200px',
    boxShadow: styles.depthShadows[0]
  },
  header: {
    backgroundColor: colors.background
  },
  commands: {
    height: 'calc(100% - 40px)',
    overflowY: 'scroll',
    display: 'flex',
    flexWrap: 'wrap'
  },
  emoji: {
    height: '32px',
    boxSizing: 'border-box',
    padding: '4px',
    margin: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    color: colors.secondaryText,
    transition: 'all .3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '3px'
  },
  attributionLink: {
    color: colors.secondaryText,
    fontWeight: 'inherit',
    fontSize: '14px',
    textDecoration: 'none'
  },
  emojiIcon: {
    width: '24px',
    height: '24px',
    marginRight: '4px'
  }
};
