import colors from '../settings/colors';

const styleSheet = {
  hr: {
    margin: 0,
    marginTop: -1,
    height: 1,
    border: 'none',
    backgroundColor: colors.grey,
  },
  text: {
    fontSize: '16px',
    color: colors.secondaryText,
    padding: '10px 10px 10px 16px',
    borderTop: `1px solid ${colors.grey}`,
    margin: 0,
    cursor: 'default',
    textTransform: 'capitalize'
  }
};

export default styleSheet;
