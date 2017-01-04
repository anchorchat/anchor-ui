import jss from 'jss';
import classNames from 'classnames';

function getClassNames(classes, style, key) {
  const sheet = jss.createStyleSheet(style).attach();

  return classNames(classes[key], sheet.classes[key]);
}

export default getClassNames;
