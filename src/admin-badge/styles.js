import colors from '../settings/colors';

const styleSheet = {
  root: {
    backgroundColor: colors.theme,
    color: colors.white,
    fontSize: '10px',
    lineHeight: '23px',
    padding: '3px',
    textAlign: 'center',
    borderRadius: '3px',
    fontFamily: 'inherit',
    border: `1px solid ${colors.theme}`
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white
  }
};

export default styleSheet;
