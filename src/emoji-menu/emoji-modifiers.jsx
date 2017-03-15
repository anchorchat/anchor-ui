import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Radium, { Style } from 'radium';
import createMarkup from './create-markup';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

function EmojiModifiers({ modifiers, changeTone, tone }) {
  return (
    <header style={styles.modifiers}>
      <div
        onClick={() => changeTone('tone0')}
        className="modifier"
        style={
          combineStyles(styles.modifier, tone === 'tone0' ? styles.modifier.active : {})
        }
      >
        <svg width="50px" height="50px" viewBox="0 0 50 50" className="emojione">
          <circle id="circle" fill="#FFDD67" cx="25" cy="25" r="25" />
        </svg>
      </div>
      {modifiers.map(modifier => (
        <div
          style={
            combineStyles(styles.modifier, modifier.title === tone ? styles.modifier.active : {})
          }
          dangerouslySetInnerHTML={createMarkup(modifier.shortname)}
          key={`emoji-${modifier.shortname}`}
          onClick={() => changeTone(modifier.title)}
          className="modifier"
        />
      ))}
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
  tone: PropTypes.string.isRequired
};

export default pure(Radium(EmojiModifiers));
