import colors from '../settings/colors';

const styles = {
  root: {
    position: 'relative',
    margin: '16px 0',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bolder',
    color: colors.secondaryText,
    fontSize: '16px',
    fontFamily: 'inherit',
    padding: '0 8px'
  },
  hr: {
    height: '1px',
    border: 0,
    margin: 0,
    backgroundColor: colors.grey,
    flex: 1
  }
};

export default styles;
