import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import IconClock from '../icons/icon-clock';
import IconEmoji from '../icons/icon-emoji';
import IconNature from '../icons/icon-nature';
import IconFood from '../icons/icon-food';
import IconActivity from '../icons/icon-activity';
import IconTravel from '../icons/icon-travel';
import IconObjects from '../icons/icon-objects';
import IconSymbols from '../icons/icon-symbols';
import colors from '../settings/colors';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

function EmojiCategories({ changeCategory, category, activeColor, recent, style, iconStyle }) {
  return (
    <footer style={combineStyles(styles.categories, style)}>
      {
        recent
        ? <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('recent')}>
          <IconClock color={category === 'recent' ? activeColor : colors.icons} />
        </div>
        : null
      }
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('people')}>
        <IconEmoji color={category === 'people' ? activeColor : colors.icons} />
      </div>
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('nature')}>
        <IconNature color={category === 'nature' ? activeColor : colors.icons} />
      </div>
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('food')}>
        <IconFood color={category === 'food' ? activeColor : colors.icons} />
      </div>
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('activity')}>
        <IconActivity color={category === 'activity' ? activeColor : colors.icons} />
      </div>
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('travel')}>
        <IconTravel color={category === 'travel' ? activeColor : colors.icons} />
      </div>
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('objects')}>
        <IconObjects color={category === 'objects' ? activeColor : colors.icons} />
      </div>
      <div style={combineStyles(styles.categories.category, iconStyle)} onClick={() => changeCategory('symbols')}>
        <IconSymbols color={category === 'symbols' ? activeColor : colors.icons} />
      </div>
    </footer>
  );
}

EmojiCategories.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  recent: PropTypes.bool.isRequired,
  style: PropTypes.instanceOf(Object),
  iconStyle: PropTypes.instanceOf(Object)
};

EmojiCategories.defaultProps = {
  style: {},
  iconStyle: {}
};

export default pure(Radium(EmojiCategories));
