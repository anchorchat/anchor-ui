import React, { Component } from 'react';
import PropTypes from 'prop-types';
import startsWith from 'lodash/startsWith';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
import reject from 'lodash/reject';
import noop from 'lodash/noop';
import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';
import map from 'lodash/map';
import emojione from 'emojione';
import htmlParser from 'html-react-parser';
import EventListener from 'react-event-listener';
import getStyles from './get-styles';
import styles from './styles';
import emoji from '../emoji-menu/emoji';
import EmojiModifiers from '../emoji-menu/emoji-modifiers';

const propTypes = {
  /** Filter emoji based on input value */
  value: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the header element */
  headerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when a emoji is selected by pressing 'enter', 'escape' or by clicking the emoji
   *
   * function(event: object, emoji: object) => void
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Callback fired when a emoji is changed by navigating with the 'arrow keys' or 'tab'
   *
   * function(event: object, emoji: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback fired when the menu is closed
   *
   * function() => void
   */
  onMenuClose: PropTypes.func,
  /**
   * Callback fired when the menu is opened
   *
   * function() => void
   */
  onMenuOpen: PropTypes.func,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  headerStyle: {},
  onMenuClose: noop,
  onMenuOpen: noop,
};

/** Used for displaying a list of commands */
class EmojiFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      emoji: [],
      tone: 'tone0',
      selectedIndex: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    const { open } = this.state;
    const { onMenuOpen } = this.props;

    if (!value) {
      return this.hideMenu();
    }

    const filteredEmoji = this.filterEmoji(nextProps.value);

    if (!isEmpty(filteredEmoji) && !open) {
      this.setState({
        open: true,
        emoji: filteredEmoji
      });
      return onMenuOpen();
    }

    if (isEmpty(filteredEmoji) && open) {
      return this.hideMenu();
    }

    return this.setState({
      emoji: filteredEmoji
    });
  }

  filterEmoji = (value, tone = this.state.tone) => { // eslint-disable-line react/destructuring-assignment
    if (!value || value.length < 3) {
      return [];
    }

    const filteredEmoji = reject(
      filter(
        emoji,
        icon => startsWith(icon.shortname, value)
      ),
      icon => icon.diversity && !includes(icon.title, tone)
    );

    if (filteredEmoji.length === 1 && includes(value, filteredEmoji[0].shortname)) {
      return [];
    }

    return filteredEmoji;
  }

  hideMenu = () => {
    const { onMenuClose } = this.props;
    const { open } = this.state;

    if (open) {
      this.setState({ open: false, emoji: [], selectedIndex: 0 });
      onMenuClose();
    }
  }

  handleKeyDown = (event) => {
    const key = event.which || event.keyCode;
    const { shiftKey } = event;
    const { selectedIndex } = this.state;

    if (key === 27) {
      return this.hideMenu(event);
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
      this.handleSelect(event, this.state.emoji[selectedIndex], selectedIndex); // eslint-disable-line react/destructuring-assignment
    }

    return false;
  }

  handleClickOutside = () => {
    this.hideMenu();
  }

  selectNext = (event) => {
    const { selectedIndex } = this.state;
    const emojiSize = size(this.state.emoji); // eslint-disable-line react/destructuring-assignment

    if (selectedIndex === null) {
      return this.handleChange(event, this.state.emoji[0], 0); // eslint-disable-line react/destructuring-assignment
    }

    if (selectedIndex + 1 < emojiSize) {
      return this.handleChange(event, this.state.emoji[selectedIndex + 1], selectedIndex + 1); // eslint-disable-line react/destructuring-assignment
    }

    if (selectedIndex === emojiSize - 1) {
      return this.handleChange(event, this.state.emoji[0], 0); // eslint-disable-line react/destructuring-assignment
    }

    return false;
  }

  selectPrevious = (event) => {
    const { selectedIndex } = this.state;
    const emojiSize = size(this.state.emoji); // eslint-disable-line react/destructuring-assignment

    if (selectedIndex === null) {
      return this.handleChange(event, this.state.emoji[0], 0); // eslint-disable-line react/destructuring-assignment
    }

    if (selectedIndex === 0) {
      return this.handleChange(event, this.state.emoji[emojiSize - 1], emojiSize - 1); // eslint-disable-line react/destructuring-assignment
    }

    if (selectedIndex - 1 < emojiSize) {
      return this.handleChange(event, this.state.emoji[selectedIndex - 1], selectedIndex - 1); // eslint-disable-line react/destructuring-assignment
    }

    return false;
  }

  changeTone = (tone) => {
    const { value } = this.props;

    this.setState({
      tone,
      emoji: this.filterEmoji(value, tone)
    });
  }

  parseHtml = (html) => {
    const options = {
      replace(domNode) {
        if (domNode.attribs && domNode.attribs.class === 'emojione') {
          const { src, alt, title } = domNode.attribs;

          return <img src={src} alt={alt} title={title} style={styles.emojiIcon} />;
        }

        return domNode;
      }
    };

    return htmlParser(html, options);
  }

  handleSelect = (event, icon, index) => {
    const { onSelect } = this.props;

    this.setState({ selectedIndex: index });
    onSelect(event, icon);
  }

  handleChange = (event, icon, index) => {
    const { onChange } = this.props;

    this.setState({ selectedIndex: index });
    onChange(event, icon);
  }

  render() {
    const {
      value,
      onSelect,
      style,
      headerStyle,
      eventTypes, // eslint-disable-line react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line react/prop-types
      preventDefault, // eslint-disable-line react/prop-types
      stopPropagation, // eslint-disable-line react/prop-types
      disableOnClickOutside, // eslint-disable-line react/prop-types
      enableOnClickOutside, // eslint-disable-line react/prop-types
      onMenuClose,
      onMenuOpen,
      color,
      ...custom
    } = this.props;
    const { open, tone, selectedIndex } = this.state;

    if (!open) {
      return null;
    }

    const modifiers = filter(emoji, { category: 'modifier' });

    return (
      <section style={getStyles.root(style)} {...custom}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
          style={getStyles.header(headerStyle)}
        />
        <section style={getStyles.commands()}>
          {map(this.state.emoji, (icon, index) => ( // eslint-disable-line
            <div
              key={icon.shortname}
              style={getStyles.emoji(color, index === selectedIndex)}
              onMouseOver={event => this.handleChange(event, icon, index)}
              onClick={event => this.handleSelect(event, icon, index)}
            >
              {this.parseHtml(emojione.toImage(icon.shortname))}
              {icon.shortname}
            </div>
          ))}
        </section>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
      </section>
    );
  }
}

EmojiFilter.displayName = 'EmojiFilter';
EmojiFilter.propTypes = propTypes;
EmojiFilter.defaultProps = defaultProps;

export default EmojiFilter;
