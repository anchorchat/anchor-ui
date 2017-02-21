import colors from '../settings/colors';

const styleSheet = {
  popOver: {
    position: 'absolute',
    top: '50%',
    right: '0',
    width: '200px',
    backgroundColor: colors.white,
    borderRadius: '3px',
    boxShadow: `${colors.boxShadow} 0px 1px 6px, ${colors.boxShadow} 0px 1px 4px`,
    margin: 0,
    paddingLeft: 0,
    overflow: 'hidden'
  }
};

export default styleSheet;
