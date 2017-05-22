import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import getStyles from './get-styles';

function RadioButtonGroup({ value, onChange, children, label, labelStyle, style, ...custom }) {
  const childrenWithProps = React.Children.map(
    children, child => React.cloneElement(
      child,
      {
        checked: child.props.value === value,
        onChange
      }
    )
  );

  return (
    <section {...custom}>
      {label ? <span style={getStyles.label(labelStyle)}>{label}</span> : null}
      <section style={getStyles.root(style)}>
        {childrenWithProps}
      </section>
    </section>
  );
}

RadioButtonGroup.propTypes = {
  /** The RadioButtonGroup's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Change the RadioButtonGroup's value */
  onChange: PropTypes.func.isRequired,
  /** The RadioButtonGroup's content (RadioButton), each child must have a value prop */
  children: PropTypes.node.isRequired,
  /** The RadioButtonGroup's label */
  label: PropTypes.node,
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

RadioButtonGroup.defaultProps = {
  label: null,
  labelStyle: {},
  style: {}
};

RadioButtonGroup.displayName = 'RadioButtonGroup';

export default pure(RadioButtonGroup);
