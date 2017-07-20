import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import pure from 'recompose/pure';
import debounce from 'lodash/debounce';
import IconSearch from '../icons/icon-search';
import getStyles from './get-styles';

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
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  inputStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the input's placeholder */
  placeholderStyle: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  placeholder: 'Search something...',
  placeholderStyle: {}
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
      ...custom
    } = this.props;

    return (
      <section style={getStyles.root(style)} {...custom}>
        <div style={getStyles.icon(iconStyle)}><IconSearch /></div>
        <input
          style={getStyles.input(inputStyle)}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          className="search-box"
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

export default pure(Radium(SearchBox));
