import jss from 'jss';
import classNames from 'classnames';

function getClassNames(classes, key, style) {
  if (style) {
    const sheet = jss.createStyleSheet(style).attach();

    return classNames(classes[key], sheet.classes[key]);
  }

  return classNames(classes[key]);
}

export default getClassNames;
