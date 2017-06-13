import colors from '../settings/colors';

export default {
  emptyState: {
    alignItems: 'center',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: '24px',
    backgroundImage: 'url()'
  },
  heading: {
    fontSize: '16px',
    fontWeight: 'bolder',
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
