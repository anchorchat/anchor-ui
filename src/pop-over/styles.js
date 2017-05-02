import colors from '../settings/colors';
import styles from '../settings/styles';

const styleSheet = {
  popOver: {
    position: 'absolute',
    top: '100%',
    right: '50%',
    minWidth: '200px',
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxShadow: styles.depthShadows[0],
    margin: 0,
    paddingLeft: 0,
    overflow: 'auto',
    zIndex: '1',
    maxWidth: '85%'
  },
  header: {
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '16px',
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.primaryText,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

export default styleSheet;
