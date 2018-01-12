import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import includes from 'lodash/includes';
import getStyles from './get-styles';

const propTypes = {
  /** The CheckboxGroup's values */
  values: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])),
  /**
   * Callback fired when CheckboxGroup's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** The CheckboxGroup's content (RadioButton), each child must have a value prop */
  children: PropTypes.node.isRequired,
  /** The CheckboxGroup's label */
  label: PropTypes.node.isRequired,
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the button container */
  buttonStyle: PropTypes.instanceOf(Object),
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.instanceOf(Object)
};

const defaultProps = {
  values: [],
  labelStyle: {},
  style: {},
  error: null,
  errorStyle: {},
  buttonStyle: {}
};

const displayName = 'CheckboxGroup';

const CheckboxGroup = ({
  values, onChange, children, buttonStyle, label, labelStyle, style, error, errorStyle, ...custom
}) => {
  const childrenWithProps = React.Children.map(
    children,
    child => React.cloneElement(
      child,
      {
        checked: includes(values, child.props.value),
        onChange
      }
    )
  );

  return (
    <section {...custom} style={style}>
      <span style={getStyles.label(labelStyle)}>{label}</span>
      <section style={getStyles.buttons(buttonStyle)}>
        {childrenWithProps}
      </section>
      {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
    </section>
  );
};

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.displayName = displayName;

export default Radium(CheckboxGroup);
