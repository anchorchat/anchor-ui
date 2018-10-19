import merge from 'lodash/merge';
import defaultStyles from '../default-styles';

const overrideStyles = {
  compact: {
    maxWidth: 'calc(100% - 40px)',
    flexDirection: 'column'
  },
  audioContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  playerContainer: {
    flex: 1,
    position: 'relative'
  },
  progressContainer: {
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
    width: '280px',
    display: 'flex',
    flexDirection: 'column'
  },
  time: {
    position: 'absolute',
    top: '10px',
    color: 'currentColor',
    fontSize: '12px',
    lineHeight: '12px',
    opacity: '.75'
  }
};

export default merge({}, defaultStyles, overrideStyles);
