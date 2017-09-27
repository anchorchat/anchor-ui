import colors from '../settings/colors';

const styleSheet = {
  root: {
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.grey}`,
    position: 'relative',
    padding: '8px 56px',
    boxSizing: 'border-box',
    height: '48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    width: '100%'
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
    height: '40px',
    position: 'absolute',
    right: '8px'
  },
  leftButton: {
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '8px'
  }
};

export default styleSheet;
