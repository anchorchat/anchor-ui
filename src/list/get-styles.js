import styles from './styles';
import combineStyles from '../internal/combine-styles';

export default {
  root: overrideStyle => combineStyles(styles.root, overrideStyle),
  listHeader: overrideStyle => combineStyles(styles.listHeader, overrideStyle),
  list: (header, overrideStyle, enableInfiniteScroll) => {
    let style = styles.list;

    if (header) {
      style = combineStyles(style, { height: 'calc(100% - 36px)' });
    }

    if (enableInfiniteScroll) {
      style = combineStyles(style, { overflowY: 'hidden' });
    }

    return combineStyles(style, overrideStyle);
  }
};
