import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import _ from 'lodash';
import onClickOutside from 'react-onclickoutside';
import emojione from 'emojione';
import htmlParser from 'html-react-parser';
import EventListener from 'react-event-listener';
import getStyles from './get-styles';
import styles from './styles';
import emoji from '../emoji-menu/emoji';
import EmojiModifiers from '../emoji-menu/emoji-modifiers';
import themeable from '../themeable';

const propTypes = {
  /** Filter emoji based on input value */
  value: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
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
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  headerStyle: {},
  onMenuClose: () => {}
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

    if (!value) {
      return this.hideMenu();
    }

    const filteredEmoji = this.filterEmoji(nextProps.value);

    if (!_.isEmpty(filteredEmoji) && !open) {
      return this.setState({
        open: true,
        emoji: filteredEmoji
      });
    }

    if (_.isEmpty(filteredEmoji) && open) {
      return this.hideMenu();
    }

    return this.setState({
      emoji: filteredEmoji
    });
  }

  filterEmoji = (value, tone = this.state.tone) => {
    if (!value || value.length < 3) {
      return [];
    }

    const filteredEmoji = _.chain(emoji)
    .filter(icon => icon.shortname.indexOf(value) === 0)
    .reject(icon => icon.diversity && !_.includes(icon.title, tone))
    .value();

    if (filteredEmoji.length === 1 && _.includes(value, filteredEmoji[0].shortname)) {
      return [];
    }

    return filteredEmoji;
  }

  hideMenu = () => {
    const { onMenuClose } = this.props;

    if (this.state.open) {
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
      this.handleSelect(event, this.state.emoji[selectedIndex], selectedIndex);
    }

    return false;
  }

  handleClickOutside = () => {
    this.hideMenu();
  }

  selectNext = (event) => {
    const { selectedIndex } = this.state;
    const emojiSize = _.size(this.state.emoji);

    if (selectedIndex === null) {
      return this.handleChange(event, this.state.emoji[0], 0);
    }

    if (selectedIndex + 1 < emojiSize) {
      return this.handleChange(event, this.state.emoji[selectedIndex + 1], selectedIndex + 1);
    }

    if (selectedIndex === emojiSize - 1) {
      return this.handleChange(event, this.state.emoji[0], 0);
    }

    return false;
  }

  selectPrevious = (event) => {
    const { selectedIndex } = this.state;
    const emojiSize = _.size(this.state.emoji);

    if (selectedIndex === null) {
      return this.handleChange(event, this.state.emoji[0], 0);
    }

    if (selectedIndex === 0) {
      return this.handleChange(event, this.state.emoji[emojiSize - 1], emojiSize - 1);
    }

    if (selectedIndex - 1 < emojiSize) {
      return this.handleChange(event, this.state.emoji[selectedIndex - 1], selectedIndex - 1);
    }

    return false;
  }

  changeTone = (tone) => {
    this.setState({
      tone,
      emoji: this.filterEmoji(this.props.value, tone)
    });
  }

  parseHtml = (html) => {
    const options = {
      replace(domNode) {
        if (domNode.attribs && domNode.attribs.class === 'emojione') {
          const src = domNode.attribs.src;
          const alt = domNode.attribs.alt;
          const title = domNode.attribs.title;

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
      value, // eslint-disable-line no-unused-vars
      onSelect, // eslint-disable-line no-unused-vars
      style,
      headerStyle,
      eventTypes, // eslint-disable-line no-unused-vars, react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line no-unused-vars, react/prop-types
      preventDefault, // eslint-disable-line no-unused-vars, react/prop-types
      stopPropagation, // eslint-disable-line no-unused-vars, react/prop-types
      disableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      enableOnClickOutside, // eslint-disable-line no-unused-vars, react/prop-types
      onMenuClose, // eslint-disable-line no-unused-vars
      color,
      ...custom
    } = this.props;
    const { open, tone, selectedIndex } = this.state;

    if (!open) {
      return null;
    }

    const modifiers = _.filter(emoji, { category: 'modifier' });

    return (
      <section style={getStyles.root(style)} {...custom}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
          style={getStyles.header(headerStyle)}
        />
        <section style={getStyles.commands()}>
          {_.map(this.state.emoji, (icon, index) => (
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

const enhance = compose(
  themeable(),
  onClickOutside,
  Radium
);

export default enhance(EmojiFilter);
