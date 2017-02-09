import colors from './colors';

const styleSheet = {
  header: {
    background: colors.white,
    borderBottom: `1px solid ${colors.grey}`,
    position: 'relative'
  },
  text: {
    color: colors.primaryText,
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '18px',
    margin: 0,
    padding: '15px 48px',
    textAlign: 'center'
  },
  buttonRight: {
    position: 'absolute',
    right: '4px',
    top: '4px'
  },
  buttonLeft: {
    position: 'absolute',
    left: '4px',
    top: '4px'
  }
};

export default styleSheet;
