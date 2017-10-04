import fade from '../../internal/fade';
import colors from '../../settings/colors';

export default {
  root: {
    width: '32px',
    color: 'currentColor',
    fontSize: '12px',
    lineHeight: '12px',
    textAlign: 'right',
    paddingLeft: '10px',
    opacity: '.75',
    flexShrink: '0',
    alignSelf: 'flex-end'
  },
  edited: {
    marginRight: '4px'
  },
  image: {
    padding: '5px 4px 4px',
    borderRadius: '3px 0 3px',
    backgroundColor: fade(colors.black, 0.55),
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    color: colors.white,
    opacity: 1
  }
};
