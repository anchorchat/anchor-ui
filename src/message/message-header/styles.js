import colors from '../../settings/colors';

export default {
  container: {
    borderLeftColor: 'inherit',
    borderRightColor: 'inherit'
  },
  arrow: {
    borderBottom: '5px solid transparent',
    borderRight: `10px solid ${colors.white}`,
    borderTop: '5px solid transparent',
    height: '0',
    left: '-10px',
    position: 'absolute',
    top: '15px'
  },
  myArrow: {
    borderRight: '10px solid',
    borderRightColor: 'inherit',
    left: 'initial',
    right: '-10px',
    transform: 'rotate(180deg)'
  },
  header: {
    color: colors.secondaryText,
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '18px',
    marginBottom: '5px',
  },
  avatar: {
    position: 'absolute',
    left: '-66px',
    top: '0'
  }
};
