import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyles) {
  return combineStyles(styles.root, overrideStyles);
}

function coverImage(overrideStyles) {
  return combineStyles(styles.coverImage, overrideStyles);
}

function avatar(overrideStyles) {
  return combineStyles(styles.avatar, overrideStyles);
}

function headerText(overrideStyles) {
  return combineStyles(styles.icon, overrideStyles);
}

function secondaryText(overrideStyles) {
  return combineStyles(styles.secondaryText, overrideStyles);
}

export default {
  root,
  coverImage,
  avatar,
  headerText,
  secondaryText
};
