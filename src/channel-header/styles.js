import colors from '../settings/colors';

const styleSheet = {
  root: {
    background: colors.white,
    borderBottom: `1px solid ${colors.grey}`,
    position: 'relative',
    padding: '8px',
    boxSizing: 'border-box',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    width: 'calc(100% - 96px)'
  },
  text: {
    color: colors.secondaryText,
    fontSize: '16px',
    fontWeight: 'bolder',
    margin: 0,
    textAlign: 'center',
    lineHeight: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  secondaryText: {
    color: colors.theme,
    fontSize: '14px',
    fontWeight: 'inherit',
    marginTop: '8px',
    marginBottom: 0,
    textAlign: 'center',
    lineHeight: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  rightButton: {
    width: '40px',
    height: '40px'
  },
  leftButton: {
    width: '40px',
    height: '40px'
  }
};

export default styleSheet;
