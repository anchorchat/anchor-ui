import colors from '../settings/colors';

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
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.secondaryText,
    margin: '0',
    textAlign: 'center'
  },
  body: {
    fontSize: '16px',
    color: colors.primaryText,
    marginBottom: '30px',
    marginTop: '16px',
    textAlign: 'center',
    maxWidth: '100%'
  }
};

export default styleSheet;
