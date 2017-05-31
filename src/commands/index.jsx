import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import map from 'lodash/map';
import themeable from '../themeable';
import getStyles from './get-styles';

const propTypes = {
  /** Text to display in the header */
  header: PropTypes.node,
  /** The list of commands. Must be an array of objects containing the following:
  * { title: String, description: String }
  */
  commands: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired
  })).isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the title element */
  titleStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the description element */
  descriptionStyle: PropTypes.instanceOf(Object),
  /**
   * Callback fired when a command is selected, currently only click events are supported
   *
   * @param {command} string The command's title
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Callback fired when a command is hovered
   *
   * @param {command} string The command's title
   */
  onHover: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  header: 'Commands',
  style: {},
  headerStyle: {},
  titleStyle: {},
  descriptionStyle: {}
};

/** Used for displaying a list of /slash commands */
const Commands = ({
  header,
  commands,
  color,
  onHover,
  onSelect,
  style,
  headerStyle,
  titleStyle,
  descriptionStyle,
  ...custom
}) => (
  <section style={getStyles.root(style)} {...custom}>
    <header style={getStyles.header(color, headerStyle)}>{header}</header>
    <section style={getStyles.commands()}>
      {map(commands, command => (
        <p
          onMouseOver={() => onHover(command.title)}
          style={getStyles.command()}
          key={command.title}
          onClick={() => onSelect(command.title)}
        >
          <strong style={getStyles.title(titleStyle)}>{command.title}</strong>
          <span style={getStyles.description(descriptionStyle)}>{command.description}</span>
        </p>
      ))}
    </section>
  </section>
);

Commands.displayName = 'Commands';
Commands.propTypes = propTypes;
Commands.defaultProps = defaultProps;

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Commands);
