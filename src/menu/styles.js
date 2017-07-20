import colors from '../settings/colors';

export default {
  container: {
    zIndex: 1,
    position: 'relative'
  },
  root: {
    width: '256px',
    height: '100%',
    backgroundColor: colors.white,
    overflowY: 'scroll',
    transform: 'translateX(-256px)',
    transition: 'all .3s ease-in-out',
    position: 'fixed',
    top: 0,
    left: 0
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
  }
};
