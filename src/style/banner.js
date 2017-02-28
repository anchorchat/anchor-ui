import colors from '../settings/colors';
import darken from '../internal/darken';

const styleSheet = {
  wrapper: {
    width: '100vw',
    height: '1px',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  banner: {
    position: 'relative',
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxShadow: `${colors.boxShadow} 0px 1px 6px, ${colors.boxShadow} 0px 1px 4px`,
    overflow: 'hidden'
  },
  desktop: {
    width: '728px',
    height: '90px'
  },
  mobile: {
    width: '320px',
    height: '50px'
  },
  button: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    boxShadow: `${colors.boxShadow} 0px 1px 6px, ${colors.boxShadow} 0px 1px 4px`,
    background: colors.primaryText,
    ':hover': {
      background: darken(colors.primaryText, 0.15)
    },
    ':active': {
      background: darken(colors.primaryText, 0.25)
    }
  }
};

export default styleSheet;
