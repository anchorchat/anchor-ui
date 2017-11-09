import merge from 'lodash/merge';
import defaultStyles from '../default-styles';

const overrideStyles = {
  container: {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    clear: 'both',
  },
  message: {
    display: 'flex',
    alignSelf: 'flex-start',
    maxWidth: 'initial'
  },
  body: {
    width: 'auto',
    height: 'auto',
    maxWidth: '152px',
    maxHeight: '152px',
    marginLeft: '16px',
    alignSelf: 'flex-start',
    marginTop: '5px'
  },
  compact: {
    alignSelf: 'flex-start'
  }
};

export default merge({}, defaultStyles, overrideStyles);
