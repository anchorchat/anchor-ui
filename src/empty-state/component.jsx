import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import getStyles from './get-styles';
import combineStyles from '../internal/combine-styles';

const propTypes = {
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

const defaultProps = {
  button: null,
  background: '',
  style: {},
  headingStyle: {},
  bodyStyle: {}
};

const displayName = 'EmptyState';

/** Pretty placeholder for empty content */
const EmptyState = ({
  headerText, bodyText, button, background, style, headingStyle, bodyStyle, ...custom
}) => (
  <section style={getStyles.root(background, style)} {...custom}>
    <h1 style={combineStyles(styles.heading, headingStyle)}>{headerText}</h1>
    <p style={combineStyles(styles.body, bodyStyle)}>{bodyText}</p>
    {button}
  </section>
);

EmptyState.propTypes = propTypes;
EmptyState.defaultProps = defaultProps;
EmptyState.displayName = displayName;

export default EmptyState;
