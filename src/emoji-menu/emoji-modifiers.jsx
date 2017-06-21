import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium, { Style } from 'radium';
import createMarkup from './create-markup';
import getStyles from './get-styles';
import styles from './styles';

function EmojiModifiers({ modifiers, changeTone, tone, style, modifierStyle }) {
  return (
    <header style={styles.modifierHeader}>
      <div style={getStyles.modifierHeader(style)}>
        <div
          onClick={() => changeTone('tone0')}
          className="modifier"
          style={
            getStyles.modifier(tone === 'tone0', modifierStyle)
          }
        >
          <svg width="50px" height="50px" viewBox="0 0 50 50" className="emojione">
            <circle id="circle" fill="#FFDD67" cx="25" cy="25" r="25" />
          </svg>
        </div>
        {modifiers.map((modifier) => {
          const title = modifier.title.replace(/:/g, '');

          return (
            <div
              style={
                getStyles.modifier(title === tone, modifierStyle)
              }
              dangerouslySetInnerHTML={createMarkup(modifier.shortname)}
              key={`emoji-${modifier.shortname}`}
              onClick={() => changeTone(title)}
              className="modifier"
            />
          );
        })}
      </div>
      <a
        style={styles.attributionLink}
        href="https://www.emojione.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Emoji by EmojiOne
      </a>
      <Style
        scopeSelector=".modifier"
        rules={{
          '.emojione': {
            width: 'inherit',
            height: 'inherit'
          }
        }}
      />
    </header>
  );
}

EmojiModifiers.propTypes = {
  modifiers: PropTypes.arrayOf(
    PropTypes.shape({
      shortname: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  changeTone: PropTypes.func.isRequired,
  tone: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object),
  modifierStyle: PropTypes.instanceOf(Object)
};

EmojiModifiers.defaultProps = {
  style: {},
  modifierStyle: {}
};

export default pure(Radium(EmojiModifiers));
