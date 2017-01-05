import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import buttonStyle from '../style/buttons';

function Button({ children, onClick, sheet: { classes }, style }) {
  return (
    <button onClick={onClick} className={getClassNames(classes, 'button', style)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      button: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    button: PropTypes.object
  })
};

export default injectSheet(buttonStyle)(Button);
