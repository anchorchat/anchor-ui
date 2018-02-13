import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import debounce from 'lodash/debounce';
import IconSearch from '../icons/icon-search';
import getStyles from './get-styles';
import colors from '../settings/colors';

const displayName = 'SearchBox';

const propTypes = {
  /**
   * Callback fired when SearchBox's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback fired when SearchBox's query changes, with debounce
   *
   * function(query: string) => void
   */
  changeSearchQuery: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.string.isRequired,
  /** The input's placeholder */
  placeholder: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the input element */
  inputStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the icon element */
  iconStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the input's placeholder */
  placeholderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** The search's icon color */
  iconColor: PropTypes.string,
  /** Add a ref to the input element */
  inputRef: PropTypes.func
};

const defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  placeholder: 'Search something...',
  placeholderStyle: {},
  iconColor: colors.icons,
  inputRef: null
};

/** General purpose Search box */
class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.changeSearchQuery = debounce(this.changeSearchQuery.bind(this), 300, false);
  }

  changeSearchQuery(event) {
    const { changeSearchQuery } = this.props;

    changeSearchQuery(event);
  }

  handleChange(event) {
    const { onChange } = this.props;

    onChange(event);
    this.changeSearchQuery(event.currentTarget.value);
  }

  render() {
    const {
      value,
      placeholder,
      style,
      inputStyle,
      iconStyle,
      changeSearchQuery,
      onChange,
      placeholderStyle,
      iconColor,
      inputRef,
      ...custom
    } = this.props;

    return (
      <section style={getStyles.root(style)} {...custom}>
        <div style={getStyles.icon(iconStyle)}><IconSearch color={iconColor} /></div>
        <input
          style={getStyles.input(inputStyle)}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          className="search-box"
          ref={inputRef}
        />
        <Style
          rules={{
            '.search-box::placeholder': getStyles.placeholder(placeholderStyle)
          }}
        />
      </section>
    );
  }
}

SearchBox.displayName = displayName;
SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;

export default Radium(SearchBox);
