import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyles => combineStyles(styles.root, overrideStyles);

const coverImage = overrideStyles => combineStyles(styles.coverImage, overrideStyles);

const avatar = overrideStyles => combineStyles(styles.avatar, overrideStyles);

const header = overrideStyles => combineStyles(styles.header, overrideStyles);

const secondaryText = overrideStyles => combineStyles(styles.secondaryText, overrideStyles);

export default {
  root,
  coverImage,
  avatar,
  header,
  secondaryText
};
