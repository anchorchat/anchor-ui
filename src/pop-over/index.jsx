import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/pop-over';
import combineStyles from '../internal/combine-styles';

/**
 * Pop over usefull for showing tooltips or menu options
 */
function PopOver({ children, style, open }) {
  return open ? <ul style={combineStyles(styles.popOver, style)}>{children}</ul> : null;
}

PopOver.displayName = 'PopOver';

PopOver.propTypes = {
  /**
   * Content of the PopOver
   */
  children: PropTypes.node.isRequired,
  /**
   * Override the styles of the root element
   */
  style: PropTypes.instanceOf(Object),
  /**
   * Boolean to check if it should be open
   */
  open: PropTypes.bool
};

PopOver.defaultProps = {
  style: {},
  open: false
};

export default pure(Radium(PopOver));
