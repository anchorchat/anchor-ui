import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(visibleItems, header, position, overrideStyle) {
  let style = styles.popOver;
  let popOverHeight;

  if (visibleItems) {
    popOverHeight = visibleItems * 44;
    style = combineStyles(style, { maxHeight: `${popOverHeight}px`, overflow: 'auto' });
  }

  if (visibleItems && header) {
    popOverHeight += 39;
    style = combineStyles(style, { maxHeight: `${popOverHeight}px`, overflow: 'auto' });
  }

  return combineStyles(combineStyles(style, position), overrideStyle);
}

export default { root };
