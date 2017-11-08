import merge from 'lodash/merge';
import defaultStyles from '../default-styles';

const overrideStyles = {
  body: {
    display: 'flex',
    lineHeight: '18px',
  },
  image: {
    borderRadius: '3px',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'cover'
  },
  compact: {
    display: 'initial'
  }
};

export default merge({}, defaultStyles, overrideStyles);
