import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  dialog: {
    width: '80%',
    maxWidth: '350px',
    margin: '0 auto',
    backgroundColor: colors.theme,
    color: colors.white,
    borderRadius: '3px',
    padding: '40px 30px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: styles.depthShadows[0],
    overflow: 'auto',
    transition: 'background .3s ease-in-out'
  },
  header: {
    color: 'inherit',
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '0',
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '12.5px'
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    zIndex: 1
  },
  clickAway: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer'
  }
};
