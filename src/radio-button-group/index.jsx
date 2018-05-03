import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

const propTypes = {
  /** The RadioButtonGroup's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Callback fired when RadioButtonGroup's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** The RadioButtonGroup's content (RadioButton), each child must have a value prop */
  children: PropTypes.node.isRequired,
  /** The RadioButtonGroup's label */
  label: PropTypes.node.isRequired,
  /** Override the styles of the label element */
  labelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the button container */
  buttonStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  labelStyle: {},
  style: {},
  error: null,
  errorStyle: {},
  buttonStyle: {}
};

const displayName = 'RadioButtonGroup';

const RadioButtonGroup = ({
  value, onChange, children, buttonStyle, label, labelStyle, style, error, errorStyle, ...custom
}) => {
  const childrenWithProps = React.Children.map(
    children,
    child => React.cloneElement(
      child,
      {
        checked: child.props.value === value,
        onChange
      }
    )
  );

  return (
    <section {...custom} style={style}>
      {label ? <span style={getStyles.label(labelStyle)}>{label}</span> : null}
      <section style={getStyles.buttons(buttonStyle)}>
        {childrenWithProps}
      </section>
      {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
    </section>
  );
};

RadioButtonGroup.propTypes = propTypes;
RadioButtonGroup.defaultProps = defaultProps;
RadioButtonGroup.displayName = displayName;

export default Radium(RadioButtonGroup);
