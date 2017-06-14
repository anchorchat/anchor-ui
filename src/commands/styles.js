import colors from '../settings/colors';
import styles from '../settings/styles';
import darken from '../internal/darken';

export default {
  root: {
    borderRadius: '3px',
    backgroundColor: colors.white,
    overflow: 'hidden',
    width: '100%',
    height: '200px',
    boxShadow: styles.depthShadows[0]
  },
  header: {
    backgroundColor: colors.theme,
    color: colors.white,
    transition: 'background .3s ease-in-out',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'inherit'
  },
  commands: {
    height: 'calc(100% - 40px)',
    overflowY: 'scroll'
  },
  command: {
    padding: '10px 20px 10px 10px',
    margin: 0,
    fontSize: '14px',
    cursor: 'pointer',
    color: colors.secondaryText,
    transition: 'all .3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    ':hover': {
      backgroundColor: darken(colors.white, 0.05)
    },
    ':active': {
      backgroundColor: darken(colors.white, 0.15)
    }
  },
  title: {
    fontWeight: 'bolder',
    marginRight: '5px',
    fontSize: '14px'
  },
  description: {
    fontStyle: 'italic',
    fontWeight: 'inherit',
    fontSize: '14px',
    float: 'right'
  }
};
