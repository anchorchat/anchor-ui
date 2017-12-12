import merge from 'lodash/merge';
import colors from '../../settings/colors';
import defaultStyles from '../default-styles';

const overrideStyles = {
  body: {
    maxWidth: '40em'
  },
  compact: {
    maxWidth: 'calc(100% - 40px)'
  },
  link: {
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'underline'
  },
  mention: {
    color: colors.theme,
    fontSize: 'inherit',
    fontWeight: 'bolder'
  }
};

export default merge({}, defaultStyles, overrideStyles);
