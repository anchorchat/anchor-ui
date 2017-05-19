import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/empty-states';
import combineStyles from '../internal/combine-styles';

const getStyle = (image, overrideStyle) => {
  const style = combineStyles(styles.emptyState, { backgroundImage: `url(${image})` });

  return combineStyles(style, overrideStyle);
};

/** Pretty placeholder for empty content */
const EmptyState = ({
  headerText, bodyText, button, background, style, headingStyle, bodyStyle, ...custom
}) => (
  <section style={getStyle(background, style)} {...custom}>
    <h1 style={combineStyles(styles.heading, headingStyle)}>{headerText}</h1>
    <p style={combineStyles(styles.body, bodyStyle)}>{bodyText}</p>
    {button}
  </section>
);

EmptyState.displayName = 'EmptyState';

EmptyState.propTypes = {
  /** Body text */
  headerText: PropTypes.node.isRequired,
  /** Header text */
  bodyText: PropTypes.node.isRequired,
  /** A call to action button */
  button: PropTypes.node,
  /** Path to background image */
  background: PropTypes.string,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header text element */
  headingStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the body text element */
  bodyStyle: PropTypes.instanceOf(Object)
};

EmptyState.defaultProps = {
  button: null,
  background: '',
  style: {},
  headingStyle: {},
  bodyStyle: {}
};

export default pure(Radium(EmptyState));
