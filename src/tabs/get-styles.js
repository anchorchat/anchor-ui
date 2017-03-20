import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyles) {
  return combineStyles(styles.root, overrideStyles);
}

function tabContainer(overrideStyles) {
  return combineStyles(styles.tabContainer, overrideStyles);
}

function contentContainer(overrideStyles) {
  return combineStyles(styles.contentContainer, overrideStyles);
}

function tabContent(selected, overrideStyles) {
  let style = styles.tabContent;

  if (selected) {
    style = combineStyles(style, { display: 'block' });
  }

  return combineStyles(style, overrideStyles);
}

export default {
  root,
  tabContainer,
  contentContainer,
  tabContent
};
