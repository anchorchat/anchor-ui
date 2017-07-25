import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import _ from 'lodash';
import Radium from 'radium';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';
import EventListener from 'react-event-listener';
import emojis from './emoji';
import EmojiCategory from './emoji-category';
import EmojiModifiers from './emoji-modifiers';
import EmojiCategories from './emoji-categories';
import Storage from './storage';
import getStyles from './get-styles';
import themeable from '../themeable';
import colors from '../settings/colors';

const storage = new Storage();

emojione.imagePathPNG = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/64/';

const propTypes = {
  /**
   * Callback fired when an emoji is clicked
   *
   * function(event: object, emoji: object) => void
   */
  sendEmoji: PropTypes.func.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the color modifiers */
  modifierStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the emoji category */
  categoryStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the emojis */
  emojiStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the footer element */
  footerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the footer icons */
  iconStyle: PropTypes.instanceOf(Object),
  /** Toggle the EmojiMenu's visibility */
  open: PropTypes.bool,
  /** Function to hide the menu */
  hideMenu: PropTypes.func.isRequired,
  /** Category icon color */
  iconColor: PropTypes.string,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  headerStyle: {},
  modifierStyle: {},
  categoryStyle: {},
  emojiStyle: {},
  footerStyle: {},
  iconStyle: {},
  open: false,
  iconColor: colors.icons
};

const displayName = 'EmojiMenu';

/** Menu for sending messages with emoji */
class EmojiMenu extends Component {
  constructor(props) {
    super(props);

    const storedEmojis = storage.getEmojis();

    this.state = {
      tone: 'tone0',
      storedEmojis: storedEmojis || [],
      category: 'people'
    };

    this.changeTone = this.changeTone.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.sendEmoji = this.sendEmoji.bind(this);
  }

  handleClickOutside = (event) => {
    const { hideMenu } = this.props;

    hideMenu(event);
  }

  handleKeyUp = (event) => {
    const { hideMenu } = this.props;

    if (event.which === 27) {
      hideMenu(event);
    }
  }

  changeTone(tone) {
    this.setState({
      tone
    });
  }

  changeCategory(category) {
    this.setState({
      category
    });
  }

  sendEmoji(event, emoji) {
    const { sendEmoji } = this.props;

    storage.storeEmoji(emoji);
    sendEmoji(event, emoji);

    const storedEmojis = storage.getEmojis();

    this.setState({
      storedEmojis: storedEmojis || []
    });
  }

  render() {
    const { tone, storedEmojis, category } = this.state;
    const {
      style,
      headerStyle,
      modifierStyle,
      categoryStyle,
      emojiStyle,
      footerStyle,
      iconStyle,
      sendEmoji,
      color,
      open,
      eventTypes, // eslint-disable-line react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line react/prop-types
      preventDefault, // eslint-disable-line react/prop-types
      stopPropagation, // eslint-disable-line react/prop-types
      disableOnClickOutside, // eslint-disable-line react/prop-types
      enableOnClickOutside, // eslint-disable-line react/prop-types
      hideMenu,
      iconColor,
      ...custom
    } = this.props;

    if (!open) {
      return null;
    }

    const modifiers = _.filter(emojis, { category: 'modifier' });

    const filteredEmoji = _.chain(emojis).filter({ category }).filter((emoji) => {
      if (emoji.diversity) {
        return _.includes(emoji.title, tone);
      }

      return true;
    }).value();

    return (
      <section style={getStyles.root(style)} {...custom}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
          style={headerStyle}
          modifierStyle={modifierStyle}
        />
        {
          storedEmojis.length > 0 && category === 'recent'
          ? <EmojiCategory
            emojis={storedEmojis}
            category="recent"
            sendEmoji={this.sendEmoji}
            style={categoryStyle}
            emojiStyle={emojiStyle}
          />
          : null
        }
        {
          category !== 'recent'
          ? <EmojiCategory
            emojis={filteredEmoji}
            category={category}
            sendEmoji={this.sendEmoji}
            style={categoryStyle}
            emojiStyle={emojiStyle}
          />
          : null
        }
        <EmojiCategories
          changeCategory={this.changeCategory}
          category={category}
          activeColor={color}
          recent={storedEmojis.length > 0}
          style={footerStyle}
          iconStyle={iconStyle}
          iconColor={iconColor}
        />
        <EventListener target="window" onKeyUp={this.handleKeyUp} />
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  onClickOutside,
  Radium
);

EmojiMenu.propTypes = propTypes;
EmojiMenu.defaultProps = defaultProps;
EmojiMenu.displayName = displayName;

export default enhance(EmojiMenu);
