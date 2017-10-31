import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const container = () => styles.container;

const overlay = (open) => {
  let style = styles.overlay;

  if (open) {
    style = combineStyles(style, { opacity: 1, pointerEvents: 'auto', left: 0 });
  }

  return style;
};

const root = (open, overrideStyle) => {
  let style = styles.root;

  if (open) {
    style = combineStyles(style, { transform: 'none' });
  }

  return combineStyles(style, overrideStyle);
};

const contentContainer = (footer, overrideStyle) => {
  let style = styles.contentContainer;

  if (footer) {
    style = combineStyles(style, { maxHeight: 'calc(100% - 35px)' });
  }

  return combineStyles(style, overrideStyle);
};

const header = (color = colors.theme, icon = false, overrideStyle) => {
  let style = combineStyles(styles.header, { color });

  if (icon) {
    style = combineStyles(style, { padding: '15.5px 16px 15.5px 40px' });
  }

  return combineStyles(style, overrideStyle);
};

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

const sidebar = overrideStyle => combineStyles(styles.sidebar, overrideStyle);

const footer = (isSidebar, overrideStyle) => {
  let style = styles.footer;

  if (isSidebar) {
    style = combineStyles(style, { position: 'initial' });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  container,
  overlay,
  root,
  header,
  icon,
  sidebar,
  footer,
  contentContainer
};
