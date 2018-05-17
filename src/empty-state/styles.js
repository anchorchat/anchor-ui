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
    fontWeight: 'inherit',
    color: colors.primaryText,
    marginBottom: '32px',
    marginTop: '16px',
    textAlign: 'center',
    maxWidth: '100%'
  }
};
