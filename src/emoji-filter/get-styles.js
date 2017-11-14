import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const header = overrideStyle => combineStyles(styles.header, overrideStyle);
const commands = overrideStyle => combineStyles(styles.commands, overrideStyle);

const emoji = (color = colors.theme, selected) => {
  let style = styles.emoji;

  if (selected) {
    style = combineStyles(style, { backgroundColor: color, color: colors.white });
  }

  return style;
};

const title = overrideStyle => combineStyles(styles.title, overrideStyle);
const description = overrideStyle => combineStyles(styles.description, overrideStyle);

export default {
  root,
  header,
  commands,
  emoji,
  title,
  description
};
