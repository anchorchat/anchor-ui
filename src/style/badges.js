import { colors } from '../settings';

const styleSheet = {
  badge: {
    backgroundColor: colors.theme,
    borderRadius: '50%',
    boxSizing: 'border-box',
    boxShadow: `0 4px 4px 0 ${colors.boxShadow}`,
    color: colors.white,
    display: 'block',
    fontSize: '12px',
    height: '20px',
    lineHeight: '16px',
    padding: '3px',
    textAlign: 'center',
    width: '20px'
  },
  inverted: {
    color: colors.theme,
    backgroundColor: colors.white
  }
};

export default styleSheet;
