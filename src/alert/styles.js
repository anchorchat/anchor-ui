import colors from '../settings/colors';
import darken from '../internal/darken';

export default {
  root: {
    borderRadius: '3px',
    boxSizing: 'border-box',
    fontSize: '16px',
    fontWeight: 'inherit',
    lineHeight: '20px',
    padding: '14px 10px',
    position: 'relative',
    minWidth: '275px',
    maxWidth: '500px'
  },
  icon: {
    height: '24px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '24px'
  },
  text: {
    margin: '0',
    paddingLeft: '32px',
    paddingRight: '42px',
    '&:first-letter': {
      textTransform: 'capitalize'
    }
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '5px'
  },
  success: {
    backgroundColor: colors.alert.success,
    border: `1px solid ${darken(colors.alert.success, 0.1)}`,
    color: darken(colors.alert.success, 0.65)
  },
  error: {
    backgroundColor: colors.alert.error,
    border: `1px solid ${darken(colors.alert.error, 0.1)}`,
    color: darken(colors.alert.error, 0.65)
  },
  warning: {
    backgroundColor: colors.alert.warning,
    border: `1px solid ${darken(colors.alert.warning, 0.1)}`,
    color: darken(colors.alert.warning, 0.65)
  },
  info: {
    backgroundColor: colors.alert.info,
    border: `1px solid ${darken(colors.alert.info, 0.1)}`,
    color: darken(colors.alert.info, 0.65)
  }
};
