import styles from './styles';
import combineStyles from '../internal/combine-styles';

export default {
  root: overrideStyle => combineStyles(styles.root, overrideStyle),
  listHeader: overrideStyle => combineStyles(styles.listHeader, overrideStyle),
  virtualizedList: overrideStyle => combineStyles(styles.virtualizedList, overrideStyle),
  list: (header, overrideStyle) => {
    let style = styles.list;

    if (header) {
      style = combineStyles(style, { height: 'calc(100% - 36px)' });
    }

    return combineStyles(style, overrideStyle);
  }
};
