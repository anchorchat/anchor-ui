import classNames from 'classnames';
import createSheet from './create-sheet';

function getClassNames(classes, style, className, component) {
  if (typeof style === 'undefined' || Object.keys(style).length === 0) {
    return classNames(classes[className]);
  }

  const sheet = createSheet(style, className, component);

  return classNames(classes[className], sheet.classes[className]);
}

export default getClassNames;
