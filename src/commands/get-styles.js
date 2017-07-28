import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const header = overrideStyle => combineStyles(styles.header, overrideStyle);
const commands = overrideStyle => combineStyles(styles.commands, overrideStyle);

const command = (color = colors.theme, active, overrideStyle) => {
  let style = styles.command;

  if (active) {
    style = combineStyles(style, { backgroundColor: color, color: colors.white });
  }

  return combineStyles(style, overrideStyle);
};

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
