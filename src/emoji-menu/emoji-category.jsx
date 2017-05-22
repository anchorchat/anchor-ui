import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import pure from 'recompose/pure';
import createMarkup from './create-markup';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

const EmojiCategory = ({ category, emojis, sendEmoji, style, emojiStyle }) => (
  <article style={combineStyles(styles.category, style)}>
    <h1 style={styles.category.header}>{category}</h1>
    <section style={styles.category.emojiContainer}>
      {emojis.map(emoji => (
        <div
          dangerouslySetInnerHTML={createMarkup(emoji.shortname)}
          key={`emoji-${emoji.shortname}`}
          onClick={() => sendEmoji(emoji)}
          style={combineStyles(styles.category.emoji, emojiStyle)}
          className="emoji"
        />
      ))}
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

EmojiCategory.propTypes = {
  category: PropTypes.string.isRequired,
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      shortname: PropTypes.string.isRequired
    })
  ).isRequired,
  sendEmoji: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
  emojiStyle: PropTypes.instanceOf(Object)
};

EmojiCategory.defaultProps = {
  style: {},
  emojiStyle: {}
};

export default pure(Radium(EmojiCategory));
