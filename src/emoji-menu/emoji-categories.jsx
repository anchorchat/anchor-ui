import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import IconClock from '../icons/icon-clock';
import IconEmoji from '../icons/icon-emoji';
import IconNature from '../icons/icon-nature';
import IconFood from '../icons/icon-food';
import IconActivity from '../icons/icon-activity';
import IconTravel from '../icons/icon-travel';
import IconObjects from '../icons/icon-objects';
import IconSymbols from '../icons/icon-symbols';
import getStyles from './get-styles';

const propTypes = {
  changeCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  recent: PropTypes.bool.isRequired,
  style: PropTypes.instanceOf(Object),
  iconStyle: PropTypes.instanceOf(Object),
  iconColor: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  iconStyle: {}
};

const EmojiCategories = ({
  changeCategory, category, activeColor, recent, style, iconStyle, iconColor
}) => (
  <footer style={getStyles.categories(style)}>
    {
      recent
      ? (
        <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('recent')}>
          <IconClock color={category === 'recent' ? activeColor : iconColor} />
        </div>
      )
      : null
    }
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('people')}>
      <IconEmoji color={category === 'people' ? activeColor : iconColor} />
    </div>
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('nature')}>
      <IconNature color={category === 'nature' ? activeColor : iconColor} />
    </div>
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('food')}>
      <IconFood color={category === 'food' ? activeColor : iconColor} />
    </div>
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('activity')}>
      <IconActivity color={category === 'activity' ? activeColor : iconColor} />
    </div>
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('travel')}>
      <IconTravel color={category === 'travel' ? activeColor : iconColor} />
    </div>
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('objects')}>
      <IconObjects color={category === 'objects' ? activeColor : iconColor} />
    </div>
    <div style={getStyles.categoriesCategory(iconStyle)} onClick={() => changeCategory('symbols')}>
      <IconSymbols color={category === 'symbols' ? activeColor : iconColor} />
    </div>
  </footer>
);

EmojiCategories.propTypes = propTypes;
EmojiCategories.defaultProps = defaultProps;

export default Radium(EmojiCategories);
