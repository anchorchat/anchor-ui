import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    width: '100%',
    height: '250px',
    backgroundColor: colors.background,
    overflow: 'hidden',
    borderRadius: '4px',
    boxShadow: styles.depthShadows[0]
  },
  modifiers: {
    display: 'flex',
    flexDirection: 'row'
  },
  modifier: {
    width: '20px',
    height: '20px',
    transition: 'all .3s ease-in-out',
    margin: '0 2.5px',
    cursor: 'pointer',
    active: {
      transform: 'scale(1.2)'
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: '0 8px',
    height: '40px',
    boxSizing: 'border-box',
    color: colors.secondaryText
  },
  attributionLink: {
    color: 'inherit',
    fontWeight: 'inherit',
    fontSize: '14px',
    textDecoration: 'none'
  },
  category: {
    height: 'calc(100% - 80px)',
    padding: '10px 6px 6px 6px',
    overflowY: 'scroll',
    boxSizing: 'border-box',
    color: colors.primaryText,

    header: {
      marginTop: '0',
      fontWeight: 'bolder',
      textTransform: 'capitalize',
      marginBottom: '10px',
      fontSize: '16px',
      lineHeight: '16px',
      color: 'inherit'
    },
    emojiContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    emoji: {
      width: '32px',
      height: '32px',
      padding: '4px',
      cursor: 'pointer',
      flexShrink: '0'
    }
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    padding: '4px',
    backgroundColor: colors.white,

    category: {
      width: '32px',
      height: '32px',
      padding: '4px',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }
  },
  after: {
    flexGrow: 9999,
    minWidth: '40px',
    height: '0'
  }
};
