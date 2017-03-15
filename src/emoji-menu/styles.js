import colors from '../settings/colors';

export default {
  container: {
    width: '100%',
    height: '250px',
    background: colors.background,
    overflow: 'hidden',
    borderRadius: '3px',
    boxShadow: `0 2px 2px 0 ${colors.boxShadow}`
  },
  modifiers: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 10px 10px 7.5px',
    background: colors.white
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
  category: {
    height: 'calc(100% - 80px)',
    padding: '10px 6px 6px 6px',
    overflowY: 'scroll',
    boxSizing: 'border-box',
    header: {
      marginTop: '0',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      marginBottom: '10px'
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
