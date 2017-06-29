import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import map from 'lodash/map';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';
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
  /** Text to display in the header */
  header: PropTypes.node,
  /** Filter emoji based on input value */
  value: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /**
   * Callback fired when a emoji is clicked
   *
   * function(event: object, emoji: object) => void
   */
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
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
      tone: 'tone0',
      selectedIndex: 0
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

  filterEmoji = (value, tone = this.state.tone) => {
    const argument = value.split(':')[1];

    if (argument.length < 2) {
      return [];
    }

    const filteredEmoji = _.chain(emoji)
    .filter(icon => icon.shortname.replace(/:/g, '').indexOf(argument) === 0)
    .reject(icon => icon.diversity && !includes(icon.title, tone))
    .value();

    if (filteredEmoji.length === 1 && includes(value, filteredEmoji[0].shortname)) {
      return [];
    }

    return filteredEmoji;
  }

  hideMenu = () => {
    if (this.state.open) {
      this.setState({ open: false, emoji: [] });
    }
  }

  handleKeyDown = (event) => {
    const key = event.which || event.keyCode;
    const { shiftKey } = event;
    const { selectedIndex } = this.state;

    if (key === 9) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }

    if (key === 27) {
      return this.hideMenu(event);
    }

    if (key === 39 || key === 40 || (key === 9 && !shiftKey)) {
      return this.selectNext(event);
    }

    if (key === 37 || key === 38 || (key === 9 && shiftKey)) {
      return this.selectPrevious(event);
    }

    if (key === 13) {
      this.selectEmoji(event, this.state.emoji[selectedIndex], selectedIndex);
    }

    return false;
  }

  handleClickOutside = () => {
    this.hideMenu();
  }

  selectNext = (event) => {
    const { selectedIndex } = this.state;
    const emojiSize = size(this.state.emoji);

    if (selectedIndex + 1 < emojiSize) {
      return this.selectEmoji(event, this.state.emoji[selectedIndex + 1], selectedIndex + 1);
    }

    if (selectedIndex === emojiSize - 1) {
      return this.selectEmoji(event, this.state.emoji[0], 0);
    }

    return false;
  }

  selectPrevious = (event) => {
    const { selectedIndex } = this.state;
    const emojiSize = size(this.state.emoji);

    if (selectedIndex === 0) {
      return this.selectEmoji(event, this.state.emoji[emojiSize - 1], emojiSize - 1);
    }

    if (selectedIndex - 1 < emojiSize) {
      return this.selectEmoji(event, this.state.emoji[selectedIndex - 1], selectedIndex - 1);
    }

    return false;
  }

  handleSelect = (event, shortname) => {
    const { onSelect } = this.props;

    this.setState({
      open: false,
      emoji: ''
    });

    onSelect(event, shortname);
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

  selectEmoji = (event, icon, index) => {
    const { onSelect } = this.props;

    this.setState({ selectedIndex: index });
    onSelect(event, icon);
  }

  render() {
    const {
      header,
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
      leading, // eslint-disable-line no-unused-vars, react/prop-types
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
          {map(this.state.emoji, (icon, index) => (
            <div
              key={icon.shortname}
              style={getStyles.emoji(color, index === selectedIndex)}
              onMouseOver={event => this.selectEmoji(event, icon, index)}
              onClick={event => this.selectEmoji(event, icon, index)}
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
