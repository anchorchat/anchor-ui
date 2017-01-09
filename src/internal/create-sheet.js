import { jss } from 'react-jss';

function createSheet(style, className, componentName) {
  const styleWithClassName = {};
  styleWithClassName[className] = style;

  return jss.createStyleSheet(styleWithClassName, { meta: componentName }).attach();
}

export default createSheet;
