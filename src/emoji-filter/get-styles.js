import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const header = overrideStyle => combineStyles(styles.header, overrideStyle);
const commands = overrideStyle => combineStyles(styles.commands, overrideStyle);
const command = overrideStyle => combineStyles(styles.command, overrideStyle);
const title = overrideStyle => combineStyles(styles.title, overrideStyle);
const description = overrideStyle => combineStyles(styles.description, overrideStyle);

export default {
  root,
  header,
  commands,
  command,
  title,
  description
};
