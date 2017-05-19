import colors from '../settings/colors';

export default {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  headerInfo: {
    display: 'flex'
  },
  heading: {
    margin: '0 5px',
    color: colors.primaryText,
    fontWeight: 'normal',
    fontSize: '16px'
  },
  strong: {
    fontWeight: 'bold'
  },
  nav: {
    display: 'flex'
  },
  navButton: {
    width: '30px',
    height: '30px',
    padding: '6px',
    lineHeight: '18px',
    alignSelf: 'center',
    margin: '0 2.5px'
  },
  iconButton: {
    padding: '3px'
  },
  select: {
    display: 'flex',
    alignItems: 'center'
  },
  selectLabel: {
    flexShrink: 0,
    marginBottom: 0,
    marginRight: '10px'
  }
};
