import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import map from 'lodash/map';
import size from 'lodash/size';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import onClickOutside from 'react-onclickoutside';
import EventListener from 'react-event-listener';
import themeable from '../themeable';
import getStyles from './get-styles';
import Avatar from '../avatar';
import styles from './styles';

const propTypes = {
  /** Text to display in the header */
  header: PropTypes.node,
  /** The list of commands. Must be an array of objects containing the following:
  *
  * {
  *   value: String,
  *   prefix: String,
  *   description: Node (optional),
  *   param: Node (optional),
  *   avatar: Node (optional)
  * }
  */
  commands: PropTypes.arrayOf(PropTypes.shape({
    /** The command's value */
    value: PropTypes.string.isRequired,
    /** The command's prefix */
    prefix: PropTypes.string.isRequired,
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
  /** Override the styles of the command element */
  commandStyle: PropTypes.instanceOf(Object),
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
  onChange: PropTypes.func.isRequired,
  /**
   * Match first word or entire input
   */
  leading: PropTypes.bool,
  /**
   * Callback fired when the menu is closed
   *
   * function() => void
   */
  onMenuClose: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  header: 'Commands',
  style: {},
  headerStyle: {},
  titleStyle: {},
  descriptionStyle: {},
  paramStyle: {},
  leading: true,
  commandStyle: {}
};

/** Used for displaying a list of commands */
class Commands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      commands: this.filterCommands(props.commands, props.value),
      selectedIndex: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    const { open } = this.state;

    if (!value) {
      this.hideMenu();
    }

    const filteredCommands = this.filterCommands(nextProps.commands, nextProps.value);

    if (!isEmpty(filteredCommands) && !open) {
      return this.setState({
        open: true,
        commands: filteredCommands
      });
    }

    if (isEmpty(filteredCommands) && open) {
      this.hideMenu();
    }

    return this.setState({
      commands: filteredCommands
    });
  }

  filterCommands = (commands, value) => {
    const { leading } = this.props;

    if (leading) {
      return filter(commands, (command) => {
        const argument = `${command.prefix}${command.value}`;

        return argument.toLowerCase().indexOf(value.toLowerCase()) === 0;
      });
    }

    return filter(commands, (command) => {
      const argument = value.split(command.prefix)[1];

      return command.value.indexOf(argument) === 0;
    });
  }

  hideMenu = () => {
    const { commands, onMenuClose } = this.props;
    const { open } = this.state;

    if (!open) {
      return false;
    }

    onMenuClose();

    return this.setState({
      open: false,
      commands,
      selectedIndex: null
    });
  }

  handleClickOutside = () => this.hideMenu()

  handleKeyDown = (event) => {
    const key = event.which || event.keyCode;
    const { shiftKey } = event;
    const { selectedIndex } = this.state;

    if (key === 27) {
      return this.hideMenu();
    }

    if (key === 39 || key === 40 || (key === 9 && !shiftKey)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return this.selectNext(event);
    }

    if (key === 37 || key === 38 || (key === 9 && shiftKey)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return this.selectPrevious(event);
    }

    if (key === 13) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.handleSelect(event, this.state.commands[selectedIndex], selectedIndex);
    }

    return false;
  }

  selectNext = (event) => {
    const { selectedIndex } = this.state;
    const commandsSize = size(this.state.commands);

    if (selectedIndex === null) {
      return this.handleChange(event, this.state.commands[0], 0);
    }

    if (selectedIndex + 1 < commandsSize) {
      return this.handleChange(event, this.state.commands[selectedIndex + 1], selectedIndex + 1);
    }

    if (selectedIndex === commandsSize - 1) {
      return this.handleChange(event, this.state.commands[0], 0);
    }

    return false;
  }

  selectPrevious = (event) => {
    const { selectedIndex } = this.state;
    const commandsSize = size(this.state.commands);

    if (selectedIndex === null) {
      return this.handleChange(event, this.state.commands[0], 0);
    }

    if (selectedIndex === 0) {
      return this.handleChange(event, this.state.commands[commandsSize - 1], commandsSize - 1);
    }

    if (selectedIndex - 1 < commandsSize) {
      return this.handleChange(event, this.state.commands[selectedIndex - 1], selectedIndex - 1);
    }

    return false;
  }

  handleSelect = (event, command, index) => {
    const { onSelect } = this.props;

    this.setState({ selectedIndex: index });
    onSelect(event, `${command.prefix}${command.value}`);
  }

  handleChange = (event, command, index) => {
    const { onChange } = this.props;

    this.setState({ selectedIndex: index });
    onChange(event, `${command.prefix}${command.value}`);
  }

  render() {
    const {
      header,
      commands,
      value,
      color,
      onChange,
      onSelect,
      style,
      headerStyle,
      titleStyle,
      descriptionStyle,
      paramStyle,
      eventTypes, // eslint-disable-line react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line react/prop-types
      preventDefault, // eslint-disable-line react/prop-types
      stopPropagation, // eslint-disable-line react/prop-types
      disableOnClickOutside, // eslint-disable-line react/prop-types
      enableOnClickOutside, // eslint-disable-line react/prop-types
      leading, // eslint-disable-line react/prop-types
      onMenuClose,
      commandStyle,
      ...custom
    } = this.props;
    const { open, selectedIndex } = this.state;

    if (!open) {
      return null;
    }

    return (
      <section style={getStyles.root(style)} {...custom}>
        <header style={getStyles.header(headerStyle)}>{header}</header>
        <section style={getStyles.commands()}>
          {map(this.state.commands, (command, index) => (
            <div
              key={command.value}
              style={getStyles.command(color, index === selectedIndex, commandStyle)}
              onClick={event => this.handleSelect(event, command, index)}
              onMouseOver={event => this.handleChange(event, command, index)}
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
                <strong style={getStyles.title(titleStyle)}>{command.prefix}{command.value}</strong>
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
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
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
