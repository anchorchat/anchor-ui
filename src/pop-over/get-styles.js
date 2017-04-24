import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(visibleItems, position, overrideStyle) {
  let style = styles.popOver;
  let popOverHeight;

  if (visibleItems) {
    popOverHeight = `${visibleItems * 44}px`;
    style = combineStyles(style, { maxHeight: popOverHeight, overflow: 'auto' });
  }

  return combineStyles(combineStyles(style, position), overrideStyle);
}

export default { root };
