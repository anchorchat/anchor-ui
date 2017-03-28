import styles from './styles';
import combineStyles from '../internal/combine-styles';

function tabContainer(overrideStyles) {
  return combineStyles(styles.tabContainer, overrideStyles);
}

function tabContent(selected, overrideStyles) {
  let style = styles.tabContent;

  if (selected) {
    style = combineStyles(style, { display: 'block' });
  }

  return combineStyles(style, overrideStyles);
}

export default {
  tabContainer,
  tabContent
};
