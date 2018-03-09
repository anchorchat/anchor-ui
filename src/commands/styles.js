import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    borderRadius: '4px',
    backgroundColor: colors.white,
    overflow: 'hidden',
    width: '100%',
    height: '200px',
    boxShadow: styles.depthShadows[0]
  },
  header: {
    backgroundColor: colors.background,
    color: colors.secondaryText,
    transition: 'background .3s ease-in-out',
    padding: '8px',
    height: '32px',
    fontSize: '16px',
    lineHeight: '16px',
    boxSizing: 'border-box',
    fontWeight: 'bolder'
  },
  commands: {
    height: 'calc(100% - 32px)',
    overflowY: 'scroll'
  },
  command: {
    padding: '8px 16px 8px 8px',
    margin: 0,
    fontSize: '14px',
    cursor: 'pointer',
    color: colors.primaryText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white
  },
  title: {
    fontWeight: 'bolder',
    marginRight: '4px',
    fontSize: '14px',
    lineHeight: '14px'
  },
  description: {
    fontStyle: 'italic',
    fontWeight: 'inherit',
    fontSize: '14px',
    lineHeight: '14px',
    float: 'right'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatarContainer: {
    width: '20px',
    height: '20px',
    marginRight: '8px'
  },
  avatar: {
    width: '100%',
    height: '100%'
  }
};
