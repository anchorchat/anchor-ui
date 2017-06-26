import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    width: '100%',
    height: '250px',
    background: colors.background,
    overflow: 'hidden',
    borderRadius: '3px',
    boxShadow: styles.depthShadows[0],
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
  modifierHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: colors.white,
    padding: '0 8px',
    height: '40px',
    boxSizing: 'border-box'
  },
  attributionLink: {
    color: colors.secondaryText,
    fontWeight: 'inherit',
    fontSize: '14px',
    textDecoration: 'none'
  },
  category: {
    height: 'calc(100% - 80px)',
    padding: '10px 6px 6px 6px',
    overflowY: 'scroll',
    boxSizing: 'border-box',
    header: {
      marginTop: '0',
      fontWeight: 'bolder',
      textTransform: 'capitalize',
      marginBottom: '10px',
      fontSize: '16px',
      lineHeight: '16px'
    },
    emojiContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    emoji: {
      width: '30px',
      height: '30px',
      padding: '5px',
      cursor: 'pointer'
    }
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
    background: colors.white,
    category: {
      width: '30px',
      height: '30px',
      padding: '3px',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }
  }
};
