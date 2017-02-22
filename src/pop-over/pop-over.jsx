import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/pop-over';
import combineStyles from '../internal/combine-styles';

/** Pop over useful for showing tooltips or menu options */
function PopOver({ children, header, style, headerStyle, open, popOverRef, position }) {
  if (!open) {
    return null;
  }

  return (
    <ul style={combineStyles(combineStyles(styles.popOver, position), style)} ref={popOverRef}>
      {header ? <h1 style={combineStyles(styles.header, headerStyle)}>{header}</h1> : null}
      {children}
    </ul>
  );
}

PopOver.displayName = 'PopOver';

PopOver.propTypes = {
  /** Content of the PopOver */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Boolean to check if it should be open */
  open: PropTypes.bool,
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Ref to the PopOver */
  popOverRef: PropTypes.func.isRequired,
  /** The PopOver's position relative to the anchor */
  position: PropTypes.instanceOf(Object)
};

PopOver.defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  open: false,
  position: {}
};

export default pure(Radium(PopOver));
