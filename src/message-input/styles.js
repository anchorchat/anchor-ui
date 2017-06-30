import colors from '../settings/colors';
import styles from '../settings/styles';

export default {
  root: {
    marginBottom: '16px',
    marginLeft: '16px',
    marginTop: '0',
    marginRight: '16px',
    position: 'relative',
    height: '48px',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3px',
    backgroundColor: colors.white,
    boxShadow: styles.depthShadows[0],
    overflow: 'auto',
    maxHeight: '200px'
  },
  input: {
    flex: '1',
    height: '100%',
    appearance: 'none',
    color: colors.primaryText,
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    outline: 'none',
    padding: '0 8px',
    border: 0,

    ':focus': {
      outline: 'none'
    },

    ':disabled': {
      opacity: '0.5'
    }
  },
  disabled: {
    opacity: '0.5'
  },
  buttons: {
    display: 'flex'
  },
  textarea: {
    resize: 'none',
    overflow: 'auto',
    padding: '16px 8px',
    boxSizing: 'border-box'
  }
};
