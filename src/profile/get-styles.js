import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyles => combineStyles(styles.root, overrideStyles);

const cover = overrideStyles => combineStyles(styles.cover, overrideStyles);

const coverImage = (image, overrideStyles) => {
  const style = combineStyles(styles.coverImage, image);

  return combineStyles(style, overrideStyles);
};

const avatar = overrideStyles => combineStyles(styles.avatar, overrideStyles);

const header = overrideStyles => combineStyles(styles.header, overrideStyles);

const secondaryText = overrideStyles => combineStyles(styles.secondaryText, overrideStyles);

export default {
  root,
  cover,
  coverImage,
  avatar,
  header,
  secondaryText
};
