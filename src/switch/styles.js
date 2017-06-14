import colors from '../settings/colors';
import fade from '../internal/fade';
import styles from '../settings/styles';

export default {
  label: {
    fontSize: '16px',
    color: colors.secondaryText,
    fontWeight: 'bolder',
    marginBottom: '10px',
    display: 'inline-block'
  },
  wrapper: {
    width: '40px',
    height: '20px',
    position: 'relative',
    cursor: 'pointer'
  },
  knob: {
    backgroundColor: colors.white,
    width: '20px',
    height: '20px',
    boxShadow: styles.depthShadows[0],
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'all .3s ease-in-out'
  },
  track: {
    backgroundColor: colors.grey,
    width: '34px',
    height: '14px',
    position: 'relative',
    top: '3px',
    left: '3px',
    borderRadius: '30px',
    transition: 'all .3s ease-in-out'
  },
  knobActive: {
    backgroundColor: colors.theme,
    left: '20px'
  },
  trackActive: {
    backgroundColor: fade(colors.theme, 0.5),
  }
};
