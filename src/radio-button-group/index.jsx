import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import combineStyles from '../internal/combine-styles';
import styles from './styles';

function RadioButtonGroup({ value, name, children, label, labelStyle }) {
  const childrenWithProps = React.Children.map(
    children, child => React.cloneElement(
      child, { name, checked: child.props.value === value }
    )
  );

  return (
    <section>
      <span style={combineStyles(styles.label, labelStyle)}>{label}</span>
      {childrenWithProps}
    </section>
  );
}

RadioButtonGroup.propTypes = {
  /** The RadioButtonGroup's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** The name for the inputs */
  name: PropTypes.string.isRequired,
  /** The RadioButtonGroup's content (RadioButton), each child must have a value prop */
  children: PropTypes.node.isRequired,
  /** The RadioButtonGroup's label */
  label: PropTypes.node,
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object)
};

RadioButtonGroup.defaultProps = {
  label: null,
  labelStyle: {}
};

RadioButtonGroup.displayName = 'RadioButtonGroup';

export default pure(RadioButtonGroup);
