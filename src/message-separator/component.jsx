import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const propTypes = {
  /** Separator text */
  text: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the text element */
  textStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  style: {},
  textStyle: {}
};

const displayName = 'MessageSeparator';

/** A separator to show above a Message */
const MessageSeparator = ({
  text, style, textStyle,
}) => (
  <section style={getStyles.root(style)}>
    <p style={getStyles.text(textStyle)}>{text}</p>
  </section>
);

MessageSeparator.propTypes = propTypes;
MessageSeparator.defaultProps = defaultProps;
MessageSeparator.displayName = displayName;

export default MessageSeparator;
