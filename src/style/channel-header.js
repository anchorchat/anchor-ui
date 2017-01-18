import colors from './colors';

const styleSheet = {
  header: {
    background: colors.white,
    borderBottom: `1px solid ${colors.grey}`
  },
  headerText: {
    color: colors.primaryText,
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '18px',
    margin: 0,
    padding: '15px 48px',
    textAlign: 'center'
  },
  button: {
    position: 'absolute',
    right: '4px',
    top: '4px'
  }
};

export default styleSheet;
