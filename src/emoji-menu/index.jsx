import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'lodash';
import Radium from 'radium';
import emojis from './emoji';
import EmojiCategory from './emoji-category';
import EmojiModifiers from './emoji-modifiers';
import EmojiCategories from './emoji-categories';
import Storage from './storage';
import colors from '../settings/colors';
import styles from './styles';

const storage = new Storage();

class EmojiMenu extends Component {
  static displayName = 'EmojiMenu'

  static propTypes = {
    /** Path to svg sprites */
    svgSprites: PropTypes.string,
    /** Send an emoji */
    sendEmoji: PropTypes.func.isRequired
  }

  static defaultProps = {
    svgSprites: '',
    activeColor: ''
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    if (props.svgSprites) {
      emojione.imageType = 'svg';
      emojione.sprites = true;
      emojione.imagePathSVGSprites = props.svgSprites;
    }

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

  sendEmoji(emoji) {
    const { sendEmoji } = this.props;

    storage.storeEmoji(emoji);
    sendEmoji(emoji);

    const storedEmojis = storage.getEmojis();

    this.setState({
      storedEmojis: storedEmojis || []
    });
  }

  render() {
    const { tone, storedEmojis, category } = this.state;
    const { color } = this.context;

    const activeColor = color || colors.theme;

    const modifiers = _.filter(emojis, { category: 'modifier' });

    const filteredEmoji = _.chain(emojis).filter({ category }).filter((emoji) => {
      if (_.includes(emoji.title, 'tone')) {
        return _.includes(emoji.title, tone);
      }

      return true;
    }).value();

    return (
      <section style={styles.container}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
        />
        {
          storedEmojis.length > 0 && category === 'recent'
          ? <EmojiCategory
            emojis={storedEmojis}
            category="recent"
            sendEmoji={this.sendEmoji}
          />
          : null
        }
        {
          category !== 'recent'
          ? <EmojiCategory
            emojis={filteredEmoji}
            category={category}
            sendEmoji={this.sendEmoji}
          />
          : null
        }
        <EmojiCategories
          changeCategory={this.changeCategory}
          category={category}
          activeColor={activeColor}
          recent={storedEmojis.length > 0}
        />
      </section>
    );
  }
}

export default Radium(EmojiMenu);
