import styles from './styles';
import combineStyles from '../internal/combine-styles';

const tabContainer = overrideStyles => combineStyles(styles.tabContainer, overrideStyles);

const tabContent = (selected, overrideStyles) => {
  let style = styles.tabContent;

  if (selected) {
    style = combineStyles(style, { display: 'block' });
  }

  return combineStyles(style, overrideStyles);
};

export default {
  tabContainer,
  tabContent
};
