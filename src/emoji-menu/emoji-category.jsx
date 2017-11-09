import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import htmlParser from 'html-react-parser';
import createMarkup from './create-markup';
import styles from './styles';
import getStyles from './get-styles';

const EmojiCategory = ({ category, emojis, sendEmoji, style, emojiStyle }) => (
  <article style={getStyles.category(style)}>
    <h1 style={styles.category.header}>{category}</h1>
    <section style={styles.category.emojiContainer}>
      {emojis.map(emoji => (
        <div
          key={`emoji-${emoji.shortname}`}
          onClick={event => sendEmoji(event, emoji)}
          style={getStyles.categoryEmoji(emojiStyle)}
          className="emoji"
        >
          {htmlParser(createMarkup(emoji.shortname))}
        </div>
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

export default Radium(EmojiCategory);
