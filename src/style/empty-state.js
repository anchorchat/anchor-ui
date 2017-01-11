import colors from './colors';

const styleSheet = {
  emptyState: {
    alignItems: 'center',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '24px'
  },
  header: {
    fontSize: '16',
    fontWeight: 'bold',
    color: colors.secondaryText,
    margin: '0',
    textAlign: 'center'
  },
  body: {
    fontSize: '16',
    color: colors.secondaryText,
    marginBottom: '30px',
    marginTop: '16px',
    textAlign: 'center'
  }
};

export default styleSheet;
