import React, { PropTypes } from 'react';
import pure from 'recompose/pure';

function RadioButtonGroup({ value, name, children }) {
  const childrenWithProps = React.Children.map(
    children, child => React.cloneElement(
      child, { name, checked: child.props.value === value }
    )
  );

  return (
    <section>
      {childrenWithProps}
    </section>
  );
}

RadioButtonGroup.propTypes = {
  /** The active value */
  value: PropTypes.string.isRequired,
  /** The name for the input's */
  name: PropTypes.string.isRequired,
  /** The RadioButtonGroup's content (RadioButton), each child must have a value prop */
  children: PropTypes.node.isRequired
};

RadioButtonGroup.displayName = 'RadioButtonGroup';

export default pure(RadioButtonGroup);
