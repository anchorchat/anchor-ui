import merge from 'lodash/merge';
import defaultStyles from '../default-styles';

const overrideStyles = {
  body: {
    display: 'flex',
    lineHeight: '18px',
  },
  compact: {
    display: 'initial'
  }
};

export default merge({}, defaultStyles, overrideStyles);
