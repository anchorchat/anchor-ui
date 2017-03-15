import React, { PropTypes } from 'react';
import Radium, { Style } from 'radium';
import pure from 'recompose/pure';
import createMarkup from './create-markup';
import styles from './styles';

function EmojiCategory({ category, emojis, sendEmoji }) {
  return (
    <article style={styles.category}>
      <h1 style={styles.category.header}>{category}</h1>
      <section style={styles.category.emojiContainer}>
        {emojis.map(emoji => (
          <div
            dangerouslySetInnerHTML={createMarkup(emoji.shortname)}
            key={`emoji-${emoji.shortname}`}
            onClick={() => sendEmoji(emoji)}
            style={styles.category.emoji}
            className="emoji"
          />
        ))}
      </section>
      <Style
        scopeSelector=".emoji"
        rules={{
          '.emojione': {
            width: 'inherit',
            height: 'inherit'
          }
        }}
      />
    </article>
  );
}

EmojiCategory.propTypes = {
  category: PropTypes.string.isRequired,
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      shortname: PropTypes.string.isRequired
    })
  ).isRequired,
  sendEmoji: PropTypes.func.isRequired
};

export default pure(Radium(EmojiCategory));
