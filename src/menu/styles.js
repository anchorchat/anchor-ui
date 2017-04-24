import colors from '../settings/colors';

export default {
  container: {
    zIndex: 1
  },
  root: {
    width: '256px',
    height: '100%',
    background: colors.white,
    overflowY: 'scroll',
    transform: 'translateX(-256px)',
    transition: 'all .3s ease-in-out',
    position: 'absolute',
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
    fontWeight: 'bold',
    color: colors.primaryText,
    margin: 0,
    padding: '16px',
    borderBottom: `1px solid ${colors.grey}`
  }
};
