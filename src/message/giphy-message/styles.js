import merge from 'lodash/merge';
import defaultStyles from '../default-styles';

const overrideStyles = {
  body: {
    display: 'flex',
    lineHeight: '18px',
    flexDirection: 'column'
  },
  giphy: {
    borderRadius: '3px',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '200px',
    objectFit: 'cover'
  },
  giphyDescription: {
    marginBottom: '8px'
  },
  compact: {
    display: 'inital'
  }
};

export default merge({}, defaultStyles, overrideStyles);
