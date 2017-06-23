import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import map from 'lodash/map';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import onClickOutside from 'react-onclickoutside';
import themeable from '../themeable';
import getStyles from './get-styles';
import Avatar from '../avatar';
import styles from './styles';

const propTypes = {
  /** Text to display in the header */
  header: PropTypes.node,
  /** The list of commands. Must be an array of objects containing the following:
  *
  * { title: Node, description: Node (optional), param: Node (optional), avatar: Node (optional) }
  */
  commands: PropTypes.arrayOf(PropTypes.shape({
    /** The command to execute */
    title: PropTypes.node.isRequired,
    /** Optional command description */
    description: PropTypes.node,
    /** Optional command parameter */
    param: PropTypes.node,
    /** Optional command avatar */
    avatar: PropTypes.node,
  })).isRequired,
  /** Filter commands based on input value */
  value: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the title element */
  titleStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the description element */
  descriptionStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the param element */
  paramStyle: PropTypes.instanceOf(Object),
  /**
   * Callback fired when a command is clicked
   *
   * function(event: object, command: string) => void
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Callback fired when a command is moused over
   *
   * function(event: object, command: string) => void
   */
  onMouseOver: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  header: 'Commands',
  style: {},
  headerStyle: {},
  titleStyle: {},
  descriptionStyle: {},
  paramStyle: {}
};

/** Used for displaying a list of commands */
class Commands extends Component {
  static filterCommands = (commands, value) => (
    filter(commands, command => command.title.toLowerCase().indexOf(value.toLowerCase()) === 0)
  )

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      commands: Commands.filterCommands(props.commands, props.value)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    const { open } = this.state;

    if (!value) {
      return this.setState({
        open: false,
        commands: nextProps.commands
      });
    }

    const filteredCommands = Commands.filterCommands(nextProps.commands, nextProps.value);

    if (!isEmpty(filteredCommands) && !open) {
      return this.setState({
        open: true,
        commands: filteredCommands
      });
    }

    if (isEmpty(filteredCommands) && open) {
      return this.setState({
        open: false,
        commands: nextProps.commands
      });
    }

    return this.setState({
      commands: filteredCommands
    });
  }

  handleClickOutside = () => {
    const { commands } = this.props;
    const { open } = this.state;

    if (open) {
      this.setState({
        open: false,
        commands
      });
    }
  }

  handleSelect = (event, command) => {
    const { onSelect, commands } = this.props;

    this.setState({
      open: false,
      commands
    });

    onSelect(event, command);
  }

  render() {
    const {
      header,
      commands, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      color,
      onMouseOver,
      onSelect, // eslint-disable-line no-unused-vars
      style,
      headerStyle,
      titleStyle,
      descriptionStyle,
      paramStyle,
      eventTypes, // eslint-disable-line no-unused-vars, react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line no-unused-vars, react/prop-types
      preventDefault, // eslint-disable-line no-unused-vars, react/prop-types
      stopPropagation, // eslint-disable-line no-unused-vars, react/prop-types
      disableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      enableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      ...custom
    } = this.props;
    const { open } = this.state;

    if (!open) {
      return null;
    }

    return (
      <section style={getStyles.root(style)} {...custom}>
        <header style={getStyles.header(color, headerStyle)}>{header}</header>
        <section style={getStyles.commands()}>
          {map(this.state.commands, command => (
            <div
              onMouseOver={event => onMouseOver(event, command.title)}
              style={getStyles.command()}
              key={command.title}
              onClick={event => this.handleSelect(event, command.title)}
            >
              <span style={styles.titleContainer}>
                {
                  command.avatar
                  ? <div style={styles.avatarContainer}>
                    {
                      typeof command.avatar === 'string'
                      ? <Avatar image={command.avatar} style={styles.avatar} />
                      : command.avatar
                    }
                  </div>
                  : null
                }
                <strong style={getStyles.title(titleStyle)}>{command.title}</strong>
                {command.param ? <span style={paramStyle}>[{command.param}]</span> : null}
              </span>
              {
                command.description
                ? <span style={getStyles.description(descriptionStyle)}>{command.description}</span>
                : null
              }
            </div>
          ))}
        </section>
      </section>
    );
  }
}

Commands.displayName = 'Commands';
Commands.propTypes = propTypes;
Commands.defaultProps = defaultProps;

const enhance = compose(
  themeable(),
  onClickOutside,
  Radium
);

export default enhance(Commands);
