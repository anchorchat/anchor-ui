import fade from '../../internal/fade';
import colors from '../../settings/colors';

export default {
  root: {
    color: 'currentColor',
    fontSize: '12px',
    lineHeight: '12px',
    textAlign: 'right',
    padding: '0 0 0 10px',
    opacity: '.75'
  },
  edited: {
    marginRight: '4px'
  },
  image: {
    padding: '4px',
    borderRadius: '4px 0 4px',
    backgroundColor: fade(colors.black, 0.55),
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    color: colors.white,
    opacity: 1
  }
};
