import colors from './colors';

const styleSheet = {
  emptyState: {
    alignItems: 'center',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: '24px'
  },
  heading: {
    fontSize: '16',
    fontWeight: 'bold',
    color: colors.primaryText,
    margin: '0',
    textAlign: 'center'
  },
  body: {
    fontSize: '16',
    color: colors.primaryText,
    marginBottom: '30px',
    marginTop: '16px',
    textAlign: 'center'
  }
};

export default styleSheet;
