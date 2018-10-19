import merge from 'lodash/merge';
import defaultStyles from '../default-styles';

const overrideStyles = {
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  compact: {
    maxWidth: 'calc(100% - 40px)',
    flexDirection: 'column'
  },
  playerContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  barContainer: {
    flex: 1,
    borderRadius: '3px',
    overflow: 'hidden',
    backgroundColor: '#DEDEDE'
  },
  bar: {
    width: '80%',
    backgroundColor: 'purple',
    height: '6px',
    borderRadius: '3px'
  },
  button: {
    width: '30px',
    height: '30px',
    padding: '6px',
    marginRight: '4px'
  },
  message: {
    width: '280px'
  }
};

export default merge({}, defaultStyles, overrideStyles);
