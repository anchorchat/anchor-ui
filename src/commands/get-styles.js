import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const header = (color = colors.theme, overrideStyle) => {
  const style = combineStyles(styles.header, { backgroundColor: color });

  return combineStyles(style, overrideStyle);
};

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
