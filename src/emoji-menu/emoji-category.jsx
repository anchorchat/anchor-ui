import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import createMarkup from './create-markup';
import styles from './styles';
import getStyles from './get-styles';

const propTypes = {
  category: PropTypes.string.isRequired,
  emojis: PropTypes.arrayOf(PropTypes.shape({
    shortname: PropTypes.string.isRequired
  })).isRequired,
  sendEmoji: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
  emojiStyle: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {},
  emojiStyle: {}
};

const EmojiCategory = ({
  category, emojis, sendEmoji, style, emojiStyle
}) => (
  <article style={getStyles.category(style)}>
    <h1 style={styles.category.header}>{category}</h1>
    <section style={styles.category.emojiContainer}>
      {emojis.map(emoji => (
        <div
          dangerouslySetInnerHTML={createMarkup(emoji.shortname)}
          key={`emoji-${emoji.shortname}`}
          onClick={event => sendEmoji(event, emoji)}
          style={getStyles.categoryEmoji(emojiStyle)}
          className="emoji"
        />
      ))}
      <div style={styles.after} />
    </section>
    <Style
      scopeSelector=".emoji"
      rules={{
        '.emojione': {
          width: 'inherit',
          height: 'inherit',
          pointerEvents: 'none'
        }
      }}
    />
  </article>
);

EmojiCategory.propTypes = propTypes;
EmojiCategory.defaultProps = defaultProps;

export default Radium(EmojiCategory);
