import classNames from 'classnames';
import _ from 'underscore';
import createSheet from './create-sheet';

function getClassNames(classes, style, className, component) {
  if (_.isEmpty(style)) {
    return classNames(classes[className]);
  }

  const sheet = createSheet(style, className, component);

  return classNames(classes[className], sheet.classes[className]);
}

export default getClassNames;
