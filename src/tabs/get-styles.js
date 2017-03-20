import styles from './styles';
import combineStyles from '../internal/combine-styles';

function tabContent(selected) {
  let style = styles.tabContent;

  if (selected) {
    style = combineStyles(style, { display: 'block' });
  }

  return style;
}

export default {
  tabContent
};
