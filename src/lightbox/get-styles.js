import combineStyles from '../internal/combine-styles';
import styles from './styles';

const root = overrideStyle => combineStyles(styles.lightbox, overrideStyle);

export default { root };
