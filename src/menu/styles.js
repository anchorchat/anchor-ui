import colors from '../settings/colors';
import lighten from '../internal/lighten';

export default {
  container: {
    zIndex: 1,
    position: 'relative'
  },
  root: {
    width: '256px',
    height: '100%',
    backgroundColor: colors.white,
    transform: 'translateX(-256px)',
    transition: 'all .3s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0
  },
  contentContainer: {
    position: 'relative',
    maxHeight: '100%',
    width: '100%',
    overflowY: 'auto',
  },
  overlay: {
    zIndex: 'initial',
    pointerEvents: 'none',
    opacity: 0,
    transition: 'opacity .3s ease-in-out'
  },
  header: {
    fontWeight: 'bolder',
    color: colors.theme,
    margin: 0,
    padding: '15.5px 16px 15.5px 16px',
    borderBottom: `1px solid ${colors.grey}`,
    fontSize: '16px',
    lineHeight: '16px'
  },
  icon: {
    position: 'absolute',
    top: '12px',
    left: '8px',
    height: '24px'
  },
  sidebar: {
    position: 'relative',
    width: '256px',
    height: '100%',
    backgroundColor: colors.white,
    overflowY: 'scroll',
    borderRight: `1px solid ${colors.grey}`
  },
  footer: {
    padding: '8px',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: lighten(colors.primaryText, 0.8),
    backgroundColor: colors.white,
    fontSize: '16px'
  }
};
