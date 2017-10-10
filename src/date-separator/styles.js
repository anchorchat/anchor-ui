import colors from '../settings/colors';

const styles = {
  root: {
    margin: '16px 0',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bolder',
    color: colors.secondaryText,
    fontSize: '16px',
    fontFamily: 'inherit',
    padding: '0 8px',
    flexShrink: 0,
    margin: 0
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
