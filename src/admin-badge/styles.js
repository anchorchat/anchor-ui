import colors from '../settings/colors';

const styleSheet = {
  root: {
    backgroundColor: colors.theme,
    color: colors.white,
    fontSize: '10px',
    lineHeight: '10px',
    padding: '2px',
    textAlign: 'center',
    borderRadius: '3px',
    fontWeight: 'inherit',
    border: `1px solid ${colors.theme}`,
    transition: 'background .3s ease-in-out'
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white
  }
};

export default styleSheet;
