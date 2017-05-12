import combineStyles from '../../internal/combine-styles';
import colors from '../../settings/colors';
import styles from './styles';

function root(myMessage, type, overrideStyle) {
  let style = styles.root;

  if (myMessage) {
    style = combineStyles(style, { left: 0, right: 'initial', opacity: '.75', color: colors.white });
  }

  if (type === 'image') {
    style = combineStyles(style, { marginTop: '10px' });
  }

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
