import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import size from 'lodash/size';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';
import startsWith from 'lodash/startsWith';
import toLower from 'lodash/toLower';
import split from 'lodash/split';
import isString from 'lodash/isString';
import EventListener from 'react-event-listener';
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
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the header element */
  headerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the title element */
  titleStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the description element */
  descriptionStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the command element */
  commandStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the param element */
  paramStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
  /** Match first word or entire input */
  leading: PropTypes.bool,
  /**
   * Callback fired when the menu is opened
   *
   * function() => void
   */
  onMenuOpen: PropTypes.func,
  /**
   * Callback fired when the menu is closed
   *
   * function() => void
   */
  onMenuClose: PropTypes.func,
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
  commandStyle: {},
  onMenuOpen: noop,
  onMenuClose: noop
};

/** Used for displaying a list of commands */
class Commands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      commands: this.filterCommands(props.commands, props.value),
      selectedIndex: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value, commands } = nextProps;
    const { open } = this.state;
    const { onMenuOpen } = this.props;

    if (!value) {
      return this.hideMenu();
    }

    const filteredCommands = this.filterCommands(commands, value);

    if (!isEmpty(filteredCommands) && !open) {
      this.setState({
        open: true,
        commands: filteredCommands
      });

      return onMenuOpen();
    }

    if (isEmpty(filteredCommands) && open) {
      return this.hideMenu();
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

        return startsWith(toLower(argument), toLower(value));
      });
    }

    return filter(commands, (command) => {
      const [argument] = split(value, command.prefix);

      return startsWith(command.value, argument);
    });
  }

  hideMenu = () => {
    const { commands, onMenuClose } = this.props;
    const { open } = this.state;

    if (open) {
      this.setState({
        open: false,
        commands,
        selectedIndex: 0
      });
      onMenuClose();
    }
  }

  handleClickOutside = () => this.hideMenu()

  handleKeyDown = (event) => {
    const key = event.which || event.keyCode;
    const { shiftKey } = event;
    const { selectedIndex, commands } = this.state;

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
      this.handleSelect(event, commands[selectedIndex], selectedIndex);
    }

    return false;
  }

  selectNext = (event) => {
    const { selectedIndex, commands } = this.state;
    const commandsSize = size(commands);

    if (selectedIndex + 1 < commandsSize) {
      return this.handleChange(event, commands[selectedIndex + 1], selectedIndex + 1);
    }

    if (selectedIndex === commandsSize - 1) {
      return this.handleChange(event, commands[0], 0);
    }

    return false;
  }

  selectPrevious = (event) => {
    const { selectedIndex, commands } = this.state;
    const commandsSize = size(commands);

    if (selectedIndex === 0) {
      return this.handleChange(event, commands[commandsSize - 1], commandsSize - 1);
    }

    if (selectedIndex - 1 < commandsSize) {
      return this.handleChange(event, commands[selectedIndex - 1], selectedIndex - 1);
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
      onMenuOpen,
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
          {map(this.state.commands, (command, index) => ( // eslint-disable-line react/destructuring-assignment
            <div
              key={command.value}
              style={getStyles.command(color, index === selectedIndex, commandStyle)}
              onClick={event => this.handleSelect(event, command, index)}
              onMouseOver={event => this.handleChange(event, command, index)}
            >
              <span style={styles.titleContainer}>
                {
                  command.avatar
                    ? (
                      <div style={styles.avatarContainer}>
                        {
                          isString(command.avatar)
                            ? <Avatar image={command.avatar} style={styles.avatar} />
                            : command.avatar
                        }
                      </div>
                    )
                    : null
                }
                <strong style={getStyles.title(titleStyle)}>{command.prefix}{command.value}</strong> {/* eslint-disable-line react/jsx-one-expression-per-line, max-len */}
                {command.param ? <span style={paramStyle}>[{command.param}]</span> : null} {/* eslint-disable-line react/jsx-one-expression-per-line, max-len */}
              </span>
              {
                command.description
                  ? (
                    <span style={getStyles.description(descriptionStyle)}>
                      {command.description}
                    </span>
                  )
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

export default Commands;
