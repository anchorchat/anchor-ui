import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import map from 'lodash/map';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import onClickOutside from 'react-onclickoutside';
import emojione from 'emojione';
import getStyles from './get-styles';
import styles from './styles';
import emoji from '../emoji-menu/emoji';
import EmojiModifiers from '../emoji-menu/emoji-modifiers';

const propTypes = {
  /** Text to display in the header */
  header: PropTypes.node,
  /** Filter emoji based on input value */
  value: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
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
  onMouseOver: PropTypes.func.isRequired
};

const defaultProps = {
  header: 'EmojiFilter',
  style: {},
  headerStyle: {}
};

/** Used for displaying a list of commands */
class EmojiFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      emoji: [],
      tone: 'tone0'
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    const { open } = this.state;

    if (!value) {
      return this.setState({
        open: false,
        emoji: []
      });
    }

    const filteredEmoji = this.filterEmoji(nextProps.value);

    if (!isEmpty(filteredEmoji) && !open) {
      return this.setState({
        open: true,
        emoji: filteredEmoji
      });
    }

    if (isEmpty(filteredEmoji) && open) {
      return this.setState({
        open: false,
        emoji: []
      });
    }

    return this.setState({
      emoji: filteredEmoji
    });
  }

  filterEmoji = (value) => {
    const argument = value.split(':')[1];

    if (argument.length < 2) {
      return [];
    }

    return filter(emoji, icon => icon.shortname.replace(/:/g, '').indexOf(argument) === 0);
  }

  handleClickOutside = () => {
    this.setState({
      open: false,
      emoji: []
    });
  }

  handleSelect = (event, shortname) => {
    const { onSelect } = this.props;

    this.setState({
      open: false,
      emoji: ''
    });

    onSelect(event, shortname);
  }

  changeTone = tone => this.setState({ tone })

  render() {
    const {
      header,
      value, // eslint-disable-line no-unused-vars
      onMouseOver,
      onSelect, // eslint-disable-line no-unused-vars
      style,
      headerStyle,
      eventTypes, // eslint-disable-line no-unused-vars, react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line no-unused-vars, react/prop-types
      preventDefault, // eslint-disable-line no-unused-vars, react/prop-types
      stopPropagation, // eslint-disable-line no-unused-vars, react/prop-types
      disableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      enableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      leading, // eslint-disable-line no-unused-vars, react/prop-types
      ...custom
    } = this.props;
    const { open, tone } = this.state;

    if (!open) {
      return null;
    }

    const modifiers = filter(emoji, { category: 'modifier' });

    const filteredEmoji = filter(this.state.emoji, (icon) => {
      if (icon.diversity) {
        return includes(icon.title, tone);
      }

      return true;
    });

    return (
      <section style={getStyles.root(style)} {...custom}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
          style={getStyles.header(headerStyle)}
        />
        <section style={getStyles.commands()}>
          {map(filteredEmoji, icon => (
            <div key={icon.shortname} style={styles.command}>
              <div dangerouslySetInnerHTML={{ __html: emojione.toImage(icon.shortname) }} />
              {icon.shortname}
            </div>
          ))}
        </section>
      </section>
    );
  }
}

EmojiFilter.displayName = 'EmojiFilter';
EmojiFilter.propTypes = propTypes;
EmojiFilter.defaultProps = defaultProps;

const enhance = compose(
  onClickOutside,
  Radium
);

export default enhance(EmojiFilter);
